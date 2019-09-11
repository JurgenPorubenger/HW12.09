var express = require('express');
var router = express.Router();
var fs = require('fs');
let cars = require('../storage/cars');
const path = require('path');


/* GET users listing. */
router.get("/:id", function (request, response) {
    console.log(cars.cars[0]);
    cars.cars.forEach((item,i,arr)=>{
        if (i==request.params["id"]) {
            response.json(item);
        }
    });
});


module.exports = router;