const express = require('express');
const { fetchDataFromServiceB } = require('../contollers/DataController');

const router = express.Router();
router.get('/', fetchDataFromServiceB);

module.exports = router;