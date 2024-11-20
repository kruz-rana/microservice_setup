const express = require('express');
const dataroutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());
app.use('/api/data', dataroutes);

module.exports = app;