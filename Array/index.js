import { Console } from "console";
import express from "express";
const app = express();

// Declare of Array 

// First way of declaration
// const cars = ["BMW", "AUDI", "MARUTI"];
// console.log(cars[0]);
// console.log(cars[2]);

// Second way of declaration of array

// const cars2 = [];
// cars2[0] = "BMW2";
// console.log(cars2[0]);
// cars2.push("AUDI2");
// console.log(cars2[1]);

// Third way of declaration of array

// const cars3 = new Array("BMW3", "AUDI3", "MARUTI3");
// console.log(cars3[2]);

//Array can store any tyoe of data

// let person = { name: "Tejasvi Kumar", age: 22 };

// const newArr = ["Hello", "Tejasvi", person];
// console.log(newArr[2]);
// console.log(newArr[2].age);

// Add or remove element form an array
const newArr = ["Tejasvi"];

newArr.push("Bihari");
console.log(newArr);
newArr.pop();
console.log(newArr);

newArr.unshift("Hello");
console.log(newArr);

newArr.shift();
console.log(newArr);




















app.listen(3000, (req, res) => {
    console.log("Server started on port 3000");
})