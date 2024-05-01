const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const logger = require('morgan');
const apiRouter = require('./routes/api');
app.use(cors());
const productRoutes = require('./routes/product');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiRouter);
app.use('/products', productRoutes);

// Start the server and log the port
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
});

module.exports = app;

