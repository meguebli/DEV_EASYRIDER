//import express && fs
const express = require("express");
const app = express();
app.use(express.json());


const router = require("./route");

//initiation application express

//initiation port
const PORT = 3000;
app.use('/', router);
//start server
app.listen(PORT, (err) => 
  err ? console.log(err) : console.log(`the server is running on port ${PORT}`)
);
