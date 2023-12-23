import { Console } from "console";
import express from "express";
const app = express();

// Declare of Array 

// First way of declaration
const cars = ["BMW", "AUDI", "MARUTI"];
console.log(cars[0]);
console.log(cars[2]);

// Second way of declaration of array

const cars2 = [];
cars2[0] = "BMW2";
console.log(cars2[0]);
cars2.push("AUDI2");
console.log(cars2[1]);

// Third way of declaration of array

const cars3 = new Array("BMW3", "AUDI3", "MARUTI3");
console.log(cars3[2]);






















app.listen(3000, (req, res) => {
    console.log("Server started on port 3000");
})