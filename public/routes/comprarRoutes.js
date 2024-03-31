const express = require('express');
const { getComprarPage } = require('../controllers/comprarController');
const router = express.Router();

router.get('/', getComprarPage)

module.exports = router;