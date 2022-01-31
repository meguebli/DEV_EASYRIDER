const express = require('express');
const router = express.Router();
const {getfeedbacks, addfeedback, updatefeedback, deletefeedback}= require('./feedback');


router.get('/feedbacks',getfeedbacks);
router.post('/newfeed', addfeedback);
router.patch('/:idfeedback', updatefeedback);
router.delete('/:idfeedback', deletefeedback);
module.exports = router;