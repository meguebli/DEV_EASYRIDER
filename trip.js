const express = require('express');
const FileSystem =require('fs');
const app = express();

app.use(express.json())

app.post('/DEV_EASYRIDER', (req, res) => {
  const jsonData=FileSystem.readFileSync('trip.json')
  const existTrip= JSON.parse(jsonData)

  //get the existing trip data 
  // const existTrip= getTripData()
  //get the new trip data from post request 
  const tripData={
    Id_trip: req.body.Id_trip,
    libelle: req.body.libelle,
    road: req.body.road,
    date: req.body.date,
    driver_name: req.body.driver_name
  }
  console.log(tripData);
  //append the trip data 
  existTrip.push(tripData)
  //save the new trip data
 saveTripData(existTrip);
  res.send({success:true,msg:'Trip data added succefully'});
  /* util functions*/
  
  } ) ;
  //get the trip data from json file 
  
//read the trip data from json file
const saveTripData = (data) =>{
  const stringifyData = JSON.stringify(data)
  FileSystem.writeFileSync('trip.json',stringifyData)}
  
  const getTripData=() =>{
    const jsonData=FileSystem.readFileSync('trip.json')
    return JSON.parse(jsonData)
  }



app.listen("8080", () => {
  console.log(`Example app listening at http://localhost:${8080}`);
});