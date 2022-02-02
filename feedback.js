const fs = require("fs");

const getfeedbacks = (req, res) => {
  const feedbacks = fs.readFileSync("./feedback.json");
  res.send(JSON.parse(feedbacks));
  //  res.send(listFeed);
};

const getDriverFeedbacks = (req, res) => {
  const feedbacks = fs.readFileSync("./feedback.json");
  const listFeed = JSON.parse(feedbacks);
  const drivername = req.params.drivername;
  const feeddriver = listFeed.filter((feed) => feed.drivername === drivername);
  
  res.send(feeddriver);
};
const getcarfeedbacks =(req, res) =>{
  const feedbacks = fs.readFileSync("./feedback.json");
  const listFeed = JSON.parse(feedbacks);
  const carname = req.params.carname;
  const feedcar = listFeed.filter((feed) => feed.carname === carname);
  res.send(feedcar);
};

const addfeedback = (req, res) => {
  const feedbacks = fs.readFileSync("feedback.json");
  const listFeed = JSON.parse(feedbacks);
  const dateF = new Date();
  var mydate =
    dateF.getDate() + "/" + (dateF.getMonth() + 1) + "/" + dateF.getFullYear();
  //const feed = req.body;
  listFeed.push({
    idfeedback: req.body.idfeedback,
    ridername: req.body.ridername,
    feedbackcontent: req.body.feedbackcontent,
    date: mydate,
    tripLib: req.body.tripLib,
    drivername: req.body.drivername,
    carname: req.body.carname,
  });
  savefeedback(listFeed);
  res.send(listFeed);
};

const updatefeedback = (req, res) => {
  const feedbacks = fs.readFileSync("feedback.json");
  const listFeed = JSON.parse(feedbacks);
  const idfeedback = req.params.idfeedback;
  const feedbackData = req.body;
  const updateFeedback = listFeed.filter(
    (feedback) => feedback.idfeedback !== idfeedback
  );
  updateFeedback.push(feedbackData);
  savefeedback(updateFeedback);
  res.send(updateFeedback);
};

const deletefeedback = (req, res) => {
  const feedbacks = fs.readFileSync("feedback.json");
  const list = JSON.parse(feedbacks);
  const idfeedback = req.params.idfeedback;
  console.log(idfeedback);
  const filterlist = list.filter(
    (feedback) => feedback.idfeedback !== idfeedback
  );
  savefeedback(filterlist);
  res.send(filterlist);
};
const savefeedback = (feedback) => {
  const stringifyData = JSON.stringify(feedback);
  fs.writeFileSync("feedback.json", stringifyData);
};
module.exports = {
  getfeedbacks,
  addfeedback,
  updatefeedback,
  deletefeedback,
  getDriverFeedbacks,
  getcarfeedbacks
};
