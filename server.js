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
const corsOptions = {
  origin: 'https://lcirwanda-backend01.onrender.com', // Frontend URL
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas with retry options
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://lci:d%40NIELLA003@lci-rwanda.p2dyccj.mongodb.net/lci_quotes?retryWrites=true&w=majority';
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    });
    console.log('MongoDB Atlas connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    setTimeout(connectDB, 5000); // Retry after 5 seconds
  }
};
connectDB();

// Schema for Quote
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
  status: { type: String, default: 'pending', enum: ['pending', 'inProgress', 'completed', 'cancelled'] },
});

quoteSchema.index({ submittedAt: -1 }); // Index for sorting by date descending
const Quote = mongoose.model('Quote', quoteSchema);

// Schema for Message
const messageSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Multer storage for files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'Uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain',
      'image/png',
      'image/jpeg',
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'));
    }
    cb(null, true);
  },
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// API to submit quote
app.post('/api/quotes', upload.fields([
  { name: 'files', maxCount: 10 },
  { name: 'paymentScreenshot', maxCount: 1 },
]), async (req, res) => {
  try {
    console.log('Received quote submission:', req.body, req.files); // Debug log
    const {
      fullName, email, phone, service, documentType,
      sourceLanguage, targetLanguage, turnaround, wordCount,
      additionalRequirements,
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
      status: 'pending',
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

// API to submit message
app.post('/api/messages', async (req, res) => {
  try {
    console.log('Received message submission:', req.body); // Debug log
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Message submission error:', error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Invalid data: ' + error.message });
    } else {
      res.status(500).json({ message: 'Server error: ' + error.message });
    }
  }
});

// API to get all quotes for admin
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ submittedAt: -1 });
    const formattedQuotes = quotes.map(quote => ({
      ...quote.toObject(),
      id: quote._id.toString(),
    }));
    res.json(formattedQuotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// API to get all messages for admin
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ submittedAt: -1 });
    const formattedMessages = messages.map(message => ({
      ...message.toObject(),
      id: message._id.toString(),
    }));
    res.json(formattedMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// API to update quote status
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
    console.error('Error updating quote status:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

app.listen(port, () => {
  console.log(`Server running on https://lcirwanda-backend01.onrender.com:${port}`);
});