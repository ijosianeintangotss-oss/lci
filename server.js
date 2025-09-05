const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // For env variables

const app = express();
const port = process.env.PORT || 5000; // Use env for port in deployment

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas with retry options
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://lci:d%40NIELLA003@lci-rwanda.p2dyccj.mongodb.net/lci_quotes?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  family: 4 // Use IPv4, skip trying IPv6
})
  .then(() => console.log('MongoDB Atlas connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema for Quote (unchanged)
const quoteSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  service: { type: String, required: true },
  documentType: { type: String, required: true },
  sourceLanguage: { type: String, required: true },
  targetLanguage: { type: String, required: true },
  turnaround: { type: String, required: true },
  wordCount: String,
  additionalRequirements: String,
  files: [String], // Array of file paths
  paymentScreenshot: String, // Path to payment screenshot
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending', enum: ['pending', 'inProgress', 'completed', 'cancelled'] } // Added status
});

quoteSchema.index({ submittedAt: -1 }); // Index for sorting by date descending

const Quote = mongoose.model('Quote', quoteSchema);

// Multer storage for files (unchanged)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads'); // Fixed: __dirname
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// API to submit quote (added better error handling)
app.post('/api/quotes', upload.fields([
  { name: 'files', maxCount: 10 },
  { name: 'paymentScreenshot', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      fullName, email, phone, service, documentType,
      sourceLanguage, targetLanguage, turnaround, wordCount,
      additionalRequirements
    } = req.body;

    const files = req.files['files'] ? req.files['files'].map(file => `/uploads/${file.filename}`) : [];
    const paymentScreenshot = req.files['paymentScreenshot'] ? `/uploads/${req.files['paymentScreenshot'][0].filename}` : null;

    const newQuote = new Quote({
      fullName,
      email,
      phone,
      service,
      documentType,
      sourceLanguage,
      targetLanguage,
      turnaround,
      wordCount,
      additionalRequirements,
      files,
      paymentScreenshot,
      status: 'pending' // Explicitly set default
    });

    await newQuote.save();
    res.status(200).json({ message: 'Quote submitted successfully' });
  } catch (error) {
    console.error('Quote submission error:', error);
    if (error.name === 'MongooseError' || error.name === 'MongoServerError') {
      res.status(500).json({ message: 'Database error - please check connection and try again' });
    } else {
      res.status(500).json({ message: 'Server error: ' + error.message });
    }
  }
});

// API to get all quotes for admin (unchanged)
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ submittedAt: -1 });
    const formattedQuotes = quotes.map(quote => ({
      ...quote.toObject(),
      id: quote._id.toString() // Map _id to id
    }));
    res.json(formattedQuotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// API to update quote status (unchanged)
app.put('/api/quotes/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedQuote = await Quote.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedQuote) {
      return res.status(404).json({ message: 'Quote not found' });
    }
    res.json(updatedQuote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve uploaded files (unchanged)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});