const express = require('express');
const infoRoutes = require('./routes/infoRoutes');

const app = express();
app.use(express.json());
app.use('/api/info', infoRoutes);

module.exports = app;