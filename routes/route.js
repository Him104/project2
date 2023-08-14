const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/collegeContoller.js');
const internController = require('../controllers/internController.js');
const getCollegeController = require('../controllers/getCollegeController.js');


router.post('/colleges', collegeController.createCollege);
router.post('/interns', internController.createIntern);
router.get('/collegeDetails', getCollegeController.getCollegeDetail);

module.exports = router; 