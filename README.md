# MONOMOTIV — High-Caliber Indian Vehicular Registry

A minimalist, obsidian-monochrome car rental experience powered by pure telemetry, transparent Indian Rupee (₹) tariffs, and zero decorative noise.

---

## ⚡ Architecture: Vercel Serverless + MongoDB Atlas

This codebase is configured for **100% serverless compatibility on Vercel** with **MongoDB Atlas connection caching** and **authentication-less open access**.

- **Frontend**: High-performance static SPA (`index.html`, `styles.css`, `app.js`, `login.html`) served at global edge CDN.
- **Backend API**: Node.js Express serverless functions routed via `api/index.js` and `vercel.json`.
- **Database**: MongoDB Atlas cloud cluster with global serverless connection pooling to prevent connection leaks across lambda invocations.
- **Access Model**: Pure authentication-less access. Anyone with the Vercel URL can browse vehicles, configure rental periods, and lock reservations with zero login barriers or required tokens.

---

## 🚀 3-Minute Vercel & MongoDB Atlas Deployment

### Step 1: Create Free MongoDB Atlas Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free M0 cluster.
2. Under **Security > Database Access**:
   - Add a new database user (e.g. `monomotiv_admin` with a secure password).
   - Assign `Read and write to any database` role.
3. Under **Security > Network Access**:
   - Click **Add IP Address** -> Choose **Allow Access from Anywhere** (`0.0.0.0/0`).
   - *This allows Vercel's dynamic serverless functions to connect to your Atlas cluster.*
4. Under **Deployment > Database**:
   - Click **Connect** -> Choose **Drivers** (Node.js).
   - Copy your connection string:
     ```
     mongodb+srv://<username>:<password>@cluster0.abc.mongodb.net/monomotiv?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with your database user credentials.

---

### Step 2: Deploy to Vercel
1. Push this project to GitHub / GitLab / Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com) and click **"Add New Project"**.
3. Import your `monomotiv` repository.
4. In **Project Settings > Environment Variables**, add:
   - **Key**: `MONGODB_URI`
   - **Value**: Your MongoDB Atlas connection string (from Step 1)
5. Click **"Deploy"**.

---

### Step 3: Verify Live Deployment
Once deployed, Vercel gives you an instant live URL (`https://your-project.vercel.app`):
1. **Main Fleet & Configurator**: `https://your-project.vercel.app/`
2. **Database Health Diagnostic**: `https://your-project.vercel.app/api/health`
   - Returns live JSON indicating `database: "connected"` and `type: "MongoDB Atlas"`.
3. **API Bookings**: `https://your-project.vercel.app/api/bookings`
4. **Optional Pilot Terminal**: `https://your-project.vercel.app/login` (or `#login`)

---

## 🛠 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional, defaults to local MongoDB)
cp .env.example .env
# Edit MONGODB_URI in .env with your Atlas string or leave empty for local MongoDB

# 3. Start local development server
npm start
# Server listens at http://localhost:3000
```

---

## 📂 Project Structure

```
monomotiv/
├── api/
│   └── index.js          # Vercel Serverless Function entrypoint
├── index.html            # Core SPA (Hero, Fleet Registry, Configurator, Voucher)
├── login.html            # Dedicated Pilot Access Terminal
├── app.js                # Client telemetry, 120Hz kinetic scroll & API dispatcher
├── styles.css            # Obsidian aesthetic styling & responsive breakpoints
├── server.js             # Express app with MongoDB Atlas connection caching
├── vercel.json           # Vercel serverless routing & SPA rewrites
├── package.json          # Node dependencies & start scripts
├── .env.example          # Environment variables template
└── .gitignore            # Secret & artifact protection
```
