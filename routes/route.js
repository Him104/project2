const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeContoller.js');
const internController = require('../controllers/internController.js');


router.post('/colleges', collegeController.createCollege);
router.post('/interns', internController.createIntern);

module.exports = router; 