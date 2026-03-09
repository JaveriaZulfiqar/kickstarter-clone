const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const creatorRoutes = require('./routes/creatorRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const backerRoutes = require('./routes/backerRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/creators', creatorRoutes);
app.use('/api/projects', visitorRoutes);
app.use('/api/backers', backerRoutes);

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));