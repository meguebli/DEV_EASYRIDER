const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())

// get car function => get car from json file

const getCars = () => {
  const cars = fs.readFileSync('car/car.json');
  return JSON.parse(cars);
};
const listCars = getCars();

// get 
const getAllCars = (req, res) => {
  res.send(listCars);
};

const getCarByCategorie = (req,res)=>{
    const carParams = req.params.categorie;
    const jsonData = fs.readFileSync('car/car.json')
    const cars = JSON.parse(jsonData)
    const carDetails = cars.filter(car=>car.categorie === carParams )
    res.send(carDetails)

}



module.exports = { getAllCars, getCarByCategorie };



