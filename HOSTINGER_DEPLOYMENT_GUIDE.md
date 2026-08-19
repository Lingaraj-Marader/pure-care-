# Pure Care Auto Accessories — Hostinger Deployment Guide

This guide walks you through deploying this Next.js application to **Hostinger** using **GitHub** and Hostinger's **Node.js Web App** or **VPS**.

---

## 📋 Prerequisites
- A Hostinger Account with:
  - **Hostinger Web Hosting / Cloud Hosting** (with Node.js support enabled in hPanel) OR
  - **Hostinger VPS** (Ubuntu with Node.js & Nginx / PM2)
- A **GitHub account**
- Your custom domain (e.g. `purecareauto.ae` or `purecare.com`) pointed to Hostinger

---

## 🚀 Option A: Deploy on Hostinger Web / Cloud Hosting (hPanel Node.js App)

### Step 1: Push Code to GitHub
Run the following commands in your local project folder:
```bash
git init
git add .
git commit -m "feat: complete Pure Care website replication ready for Hostinger"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

---

### Step 2: Set Up Git in Hostinger hPanel
1. Log in to **Hostinger hPanel**.
2. Select your domain/hosting plan.
3. Go to **Advanced** → **Git**.
4. Configure the repository:
   - **Repository URL**: `https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git`
   - **Branch**: `main`
   - **Install in directory**: `public_html` (or leave default for root)
5. Click **Create** and then click **Deploy**.
6. *(Optional)* Copy the **Webhook URL** shown in Hostinger and add it to your GitHub Repository (**Settings → Webhooks**) for automatic deployment whenever you push new changes!

---

### Step 3: Configure Node.js Application in hPanel
1. In hPanel, search for or click on **Node.js** (under *Advanced* or *Websites*).
2. Click **Create Application** (or **Manage**):
   - **Node.js Version**: Select **`20.x`** or **`22.x`** (or minimum `18.18+`)
   - **Application Mode**: `Production`
   - **Application Root**: `public_html` (or the folder where your git repo was cloned)
   - **Application Startup File**: `server.js`
   - **Application URL**: Select your domain
3. Click **Create** / **Save**.

---

### Step 4: Install Dependencies & Build
1. In the Node.js management screen, or via **SSH / Terminal** in hPanel:
```bash
cd public_html
npm install
npm run build
```
2. In the hPanel Node.js dashboard, click **Restart Application**.

---

## ⚡ Option B: Deploy on Hostinger VPS (Ubuntu + PM2 + Nginx)

If you are using a Hostinger VPS:

1. **Connect via SSH**:
```bash
ssh root@YOUR_SERVER_IP
```

2. **Clone your repository**:
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git purecare
cd purecare
```

3. **Install dependencies and build**:
```bash
npm install
npm run build
```

4. **Start the application with PM2**:
```bash
npm install -g pm2
pm2 start server.js --name "purecare"
pm2 save
pm2 startup
```

5. **Nginx Reverse Proxy Configuration**:
Create `/etc/nginx/sites-available/purecare`:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Enable and reload Nginx:
```bash
ln -s /etc/nginx/sites-available/purecare /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

6. **SSL Certificate (Free HTTPS with Certbot)**:
```bash
apt install certbot python3-certbot-nginx -y
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 📂 Key Configuration Files Included

- **`server.js`**: Custom production server that automatically handles Hostinger's environment and executes the optimized Next.js standalone build.
- **`next.config.mjs`**: Configured with `output: 'standalone'` and unoptimized image support for high compatibility.
- **`copy-static.js`**: Automatically copies `/public` and `.next/static` assets into the standalone bundle during `npm run build`.
- **`.gitignore`**: Excludes `node_modules`, `.next`, build caches, and sensitive files.
