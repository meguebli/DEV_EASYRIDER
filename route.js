const express = require('express');
const { getbooks, gethistorybooks, booktrip } = require('./book');
const router = express.Router();
const {getfeedbacks, addfeedback, updatefeedback, deletefeedback, getDriverFeedbacks, getcarfeedbacks}= require('./feedback');
const { addRateCar, addDriverRate, getRatesCarByIdcar, getRatesByDriverName } = require('./rating');


router.get('/feedbacks',getfeedbacks);
router.get('/feedbacks/:drivername', getDriverFeedbacks);
router.get('/feedbackscar/:carname', getcarfeedbacks);
router.post('/newfeed', addfeedback);
router.patch('/updatefeed/:idfeedback', updatefeedback);
router.delete('/deletefeed/:idfeedback', deletefeedback);
router.get('/books', getbooks);
router.get('/books/:ridername', gethistorybooks);
router.get('/newbook/:ridername', booktrip);
router.get('/ratecar/:idcar', addRateCar);
router.get('/rates/:idcar', getRatesCarByIdcar);
router.get('/ratesdriver/:drivername', getRatesByDriverName);
router.get('/ratedriver/:drivername', addDriverRate);
module.exports = router;