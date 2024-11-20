const express = require('express');
const { getInfo } = require('../controllers/InfoController');

const router = express.Router();
router.get('/', getInfo);

module.exports = router;