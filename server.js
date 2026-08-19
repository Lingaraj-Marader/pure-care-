// Hostinger Node.js Startup File
const fs = require("fs");
const path = require("path");

process.env.NODE_ENV = "production";
process.env.PORT = process.env.PORT || "3000";
process.env.HOSTNAME = process.env.HOSTNAME || "0.0.0.0";

const standalonePath = path.join(__dirname, ".next", "standalone", "server.js");

if (fs.existsSync(standalonePath)) {
  require(standalonePath);
} else {
  // Fallback to next start
  const { createServer } = require("http");
  const next = require("next");
  const app = next({ dev: false, hostname: process.env.HOSTNAME, port: parseInt(process.env.PORT, 10) });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      handle(req, res);
    }).listen(process.env.PORT, () => {
      console.log(`> Server ready on http://${process.env.HOSTNAME}:${process.env.PORT}`);
    });
  });
}
