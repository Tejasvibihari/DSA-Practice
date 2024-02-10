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
// const newArr = ["Tejasvi"];

// newArr.push("Bihari");
// console.log(newArr);
// newArr.pop();
// console.log(newArr);

// newArr.unshift("Hello");
// console.log(newArr);

// newArr.shift();
// console.log(newArr);

//Looping an array

// const newArray = ["Tejasvi", "Guriya", "Bihari", "Govind",];

// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i]);
// }

//Inbuilt loop method
// const numbers = [1, 2, 3, 4, 5, 6];

// const mapFn = numbers.map((item, index, array) => {
//     return (item + 1);

// });
// console.log(mapFn);

// const filterFn = numbers.filter((item, index, array) => {
//     return (item > 3);

// });
// console.log(filterFn);

// const reduceFn = numbers.reduce((prev, item) => {
//     return (prev + item);

// }, 0);
// console.log(reduceFn);

// Spread And Rest Operator

// Ques 1- Second Largest Number in an Array

const arr = [7, 4, 8, 1, 6, 10, 3, 9, 2, 5];

function secondLargest(arr) {
    const uniqueSet = new Set(arr); // Set is used to remove duplicate elements
    const uniqueArr = Array.from(uniqueSet); // Convert set to array
    console.log(uniqueSet);
    console.log(uniqueArr);
    uniqueArr.sort((a, b) => {
        return b - a;
    });
    if (uniqueArr.length > 1) {
        console.log(uniqueArr[1]);
    } else {
        console.log("Second largest number not found");
    }
}

secondLargest(arr);

















app.listen(3000, (req, res) => {
    console.log("Server started on port 3000");
})