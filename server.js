// Hostinger Node.js Application Startup File
const { spawn } = require("child_process");
const path = require("path");

const port = process.env.PORT || "3000";
const hostname = process.env.HOSTNAME || "0.0.0.0";

const nextBin = path.join(__dirname, "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextBin, "start", "-p", port, "-H", hostname], {
  stdio: "inherit",
  cwd: __dirname,
  env: { ...process.env, NODE_ENV: "production", PORT: String(port), HOSTNAME: hostname },
});

child.on("exit", (code) => {
  process.exit(code || 0);
});
