const fs = require('fs');



const addRateCar = (req, res) =>{
    const data = fs.readFileSync('./ratingCar.json');
    const rates = JSON.parse(data);
    rates.push({"rate": req.body.rate, "idcar": req.params.idcar});
    const stringifyrates = JSON.stringify(rates);
    fs.writeFileSync("ratingCar.json", stringifyrates);
    res.send(rates);


}
const addDriverRate = (req,res) =>{
    const ratecars = fs.readFileSync('./driverRate.json');
    const ratesC = JSON.parse(ratecars);
    ratesC.push({"drivername": req.params.drivername, "rate": req.body.rate, });
    const strigifydriver = JSON.stringify(ratesC);
    fs.writeFileSync("driverRate.json", strigifydriver);
    res.send(ratesC);
}
module.exports = {addRateCar, addDriverRate};