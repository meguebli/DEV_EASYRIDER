//import express && fs
const express = require("express");
//initiation application express
const app = express();
app.use(express.json());


const router = require("./route");



//initiation port
const PORT = 3000;
app.use('/', router);
//start server
app.listen(PORT, (err) => 
  err ? console.log(err) : console.log(`the server is running on port ${PORT}`)
);
