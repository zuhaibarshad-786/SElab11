const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ecommerce')
mongoose.connect('mongodb+srv://zohaibarshad2022:mongozohaib51@cluster0.z8anx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

