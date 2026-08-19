const fs = require("fs");
const path = require("path");

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  const entries = fs.readdirSync(from, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);

    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const standalonePath = path.join(__dirname, ".next", "standalone");

if (fs.existsSync(standalonePath)) {
  copyFolderSync(
    path.join(__dirname, "public"),
    path.join(standalonePath, "public")
  );
  copyFolderSync(
    path.join(__dirname, ".next", "static"),
    path.join(standalonePath, ".next", "static")
  );
  console.log("✓ Successfully copied static assets to .next/standalone for production");
}
