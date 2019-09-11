var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


let cars = require('../storage/cars');


router.get('/', function(req, res, next) {
  res.json(cars);
  console.log(cars);
});

router.post('/', function (req, res) {
  let pathToJson = path.join(path.dirname(__dirname),'storage', 'cars.json');
  let oneCar = {
     cars: []
  };

  oneCar.cars.push({name: req.body.name, model: req.body.model});
  cars.cars.push(oneCar.cars[0]);

  let json = JSON.stringify(cars);
  fs.writeFile(pathToJson, json, 'utf8', (err,data)=>{
    if(err) throw err;
      console.log(data)
  });
  res.send()
});



module.exports = router;
