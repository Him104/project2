const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeContoller.js');

router.post('/colleges', collegeController.createCollege);

module.exports = router; 