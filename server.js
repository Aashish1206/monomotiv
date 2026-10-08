// Load environment variables (from .env in local dev if present)
try {
  require('dotenv').config();
} catch (_) {}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (allowing any Vercel domain, local dev, preview URLs)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

/* ==========================================================================
   1. MONGODB ATLAS SERVERLESS CONNECTION CACHING
   ========================================================================== */
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI || 
                process.env.MONGO_URI || 
                process.env.MONGO_URII || 
                'mongodb://127.0.0.1:27017/monomotiv';

    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      const isAtlas = uri.includes('mongodb.net') || uri.includes('+srv');
      console.log(`✓ Connected to ${isAtlas ? 'MongoDB Atlas (Cloud Cluster)' : 'Local MongoDB Instance'}`);
      return mongooseInstance;
    }).catch(err => {
      console.error('X MongoDB connection error:', err.message);
      cached.promise = null;
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Middleware: Automatically ensure DB connection on all /api routes
app.use(async (req, res, next) => {
  if (req.path.startsWith('/api')) {
    try {
      await connectToDatabase();
      next();
    } catch (err) {
      console.error('Database connection unavailable for API request:', err.message);
      // If DB fails, respond with clear diagnostic JSON
      return res.status(500).json({
        success: false,
        error: 'Database connection failed. Please check MONGODB_URI configuration in Vercel settings.',
        details: err.message
      });
    }
  } else {
    next();
  }
});

/* ==========================================================================
   2. SCHEMAS & MODELS
   ========================================================================== */
// Booking Schema (Flexible, open access, zero auth required)
const bookingSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  totalDays: { type: Number, required: true },
  insuranceTier: { type: String, default: 'Standard' },
  totalPrice: { type: Number, required: true },
  bookingRef: { type: String, required: true },
  customerName: { type: String, default: 'Primary Operator' },
  customerEmail: { type: String, default: '' },
  customerPhone: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
}, { strict: false });

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

// Optional User Schema for Pilot Terminal
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: 'Authorized Pilot' },
  role: { type: String, default: 'Pilot Operator' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

/* ==========================================================================
   3. API ENDPOINTS (AUTHENTICATION-LESS & PUBLIC ACCESS)
   ========================================================================== */

// Health & Diagnostic Endpoint
app.get('/api/health', (req, res) => {
  const readyState = mongoose.connection.readyState;
  const stateLabels = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI || process.env.MONGO_URII || '';
  const isAtlas = uri.includes('mongodb.net') || uri.includes('+srv');

  res.json({
    status: 'online',
    app: 'monomotiv',
    timestamp: new Date().toISOString(),
    database: {
      status: stateLabels[readyState] || 'unknown',
      type: isAtlas ? 'MongoDB Atlas' : (uri ? 'Custom MongoDB' : 'Local Fallback'),
      configured: Boolean(uri)
    },
    runtime: process.env.VERCEL ? 'vercel-serverless' : 'node-standalone',
    access: 'authentication-less'
  });
});

// Create a New Booking (No auth token or credentials required)
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    console.log('✓ New booking stored in MongoDB:', newBooking.bookingRef);
    res.status(201).json({ success: true, booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Retrieve Bookings List (Publicly viewable)
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Optional Pilot Login & Auto-Enrollment
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password, name, mode } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Pilot identifier and passkey required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    let user = await User.findOne({ email: cleanEmail });

    if (!user) {
      // Auto-enroll new pilot
      const pilotName = name && name.trim() ? name.trim() : cleanEmail.split('@')[0].toUpperCase();
      user = new User({
        email: cleanEmail,
        password: password,
        name: pilotName,
        role: 'Pilot Operator'
      });
      await user.save();
      console.log('✓ New pilot enrolled:', user.email);
    } else if (mode === 'register') {
      return res.status(409).json({ success: false, message: 'Pilot identifier already registered. Use Sign In.' });
    } else if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid passkey for registered pilot.' });
    }

    res.json({
      success: true,
      message: 'Terminal access authorized',
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error during pilot authentication:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/* ==========================================================================
   4. STATIC FILE SERVING & CLIENT ROUTING (COMPATIBLE WITH VERCEL & LOCAL)
   ========================================================================== */
// Helper to find file in public/ folder or root folder
function resolveStaticFile(filename) {
  const publicPath = path.join(__dirname, 'public', filename);
  if (fs.existsSync(publicPath)) return publicPath;
  const rootPath = path.join(__dirname, filename);
  if (fs.existsSync(rootPath)) return rootPath;
  return null;
}

// Static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Dedicated /login route
app.get('/login', (req, res) => {
  const target = resolveStaticFile('login.html');
  if (target) return res.sendFile(target);
  res.redirect('/#login');
});

// Express 5 compliant SPA fallback
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    const target = resolveStaticFile('index.html');
    if (target) return res.sendFile(target);
  }
  next();
});

/* ==========================================================================
   5. SERVER STARTUP (STANDALONE ONLY; EXPORTS FOR VERCEL SERVERLESS)
   ========================================================================== */
if (require.main === module) {
  // Connect eagerly when running standalone
  connectToDatabase().catch(() => {});
  app.listen(PORT, () => {
    console.log(`✓ Monomotiv server running standalone at http://localhost:${PORT}`);
  });
}

module.exports = app;
module.exports.connectToDatabase = connectToDatabase;