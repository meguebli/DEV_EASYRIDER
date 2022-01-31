const { Car, saveChange } = require('./carModel');

const fs = require('fs');

const allCars = () => {
  const cars = fs.readFileSync('carData.json');
  return JSON.parse(cars);
};
const listCars = allCars();
const getAllCars = (req, res) => {
  res.send(listCars);
};

const postCar = (req, res) => {
  const addCar = new Car(
    req.body.id,
    req.body.matricule,
    req.body.category,
    req.body.nbPlace
  );
  const car = {
      id : addCar.id,
      matricule: addCar.matricule,
      category: addCar.category,
      nbPlace: addCar.nbPlace
  }
  listCars.push(car)
  saveChange(listCars)
  res.status(200).json({listCars})
};



module.exports = {getAllCars, postCar}