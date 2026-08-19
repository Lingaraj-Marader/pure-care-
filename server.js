// Hostinger Node.js Application Startup File
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const port = process.env.PORT || "3000";
const hostname = process.env.HOSTNAME || "0.0.0.0";

const standaloneServer = path.join(__dirname, ".next", "standalone", "server.js");
const buildId = path.join(__dirname, ".next", "BUILD_ID");

if (fs.existsSync(standaloneServer)) {
  process.env.NODE_ENV = "production";
  process.env.PORT = String(port);
  process.env.HOSTNAME = hostname;
  require(standaloneServer);
} else if (fs.existsSync(buildId)) {
  const npmCmd = process.platform === "win32" ? "npx.cmd" : "npx";
  const child = spawn(npmCmd, ["next", "start", "-p", port, "-H", hostname], {
    stdio: "inherit",
    shell: true,
  });
  child.on("exit", (code) => process.exit(code || 0));
} else {
  console.log("> Note: No production build found in .next directory.");
  console.log("> Starting in development mode... (Run 'npm run build' for production build)");
  const npmCmd = process.platform === "win32" ? "npx.cmd" : "npx";
  const child = spawn(npmCmd, ["next", "dev", "-p", port, "-H", hostname], {
    stdio: "inherit",
    shell: true,
  });
  child.on("exit", (code) => process.exit(code || 0));
}
