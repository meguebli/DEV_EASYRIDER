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

// POST method : to add a new car 

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

// PATCH Method: to modify an existing car

const updateCar = (req,res) => {
  // getting the id from the url parameter
  const idCar = req.params.id
  // Searching for a car with the same id
  const searchedCar = listCars.find(function(post, index){
    console.log('hello');
    if (post.id == idCar){
      return true
    }
  });
  // console.log(searchedCar)
    const modifiedCar = new Car(idCar, req.body.matricule, req.body.category, req.body.nbPlace)
    console.log(modifiedCar);
    const carToSave = {
      id: idCar,
      matricule: modifiedCar.matricule,
      category: modifiedCar.category,
      nbPlace: modifiedCar.nbPlace
    }
    const indexCar = listCars.indexOf(searchedCar)
    console.log(indexCar)
    listCars[indexCar] = carToSave
    console.log(listCars.indexOf(searchedCar));
    console.log(listCars)
    saveChange(listCars)
    res.status(200).json({listCars})
  
  
}



module.exports = {getAllCars, postCar, updateCar }