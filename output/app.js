"use strict";
// const country = " my country Bangladesh 2.0"
// const nam: string = "Mehedi"
// console.log(country, nam);
//Basic Types
//for string
let text = "Neymar";
text = 10; //throw arror because gace this variale type string
text = "Messi"; // then ok
console.log(text);
//for Number
let roll = 2;
roll = "3"; // throw error
roll = 5; //then ok
//for fuction
const multiply = (x, y) => {
    return x + y;
};
console.log(multiply("3", 3)); //throw error
console.log(multiply(2, 3));
//for array
const fruits = ["banana", "orange", "apple", 4, {}];
fruits.push(49);
fruits.push({
    quantity: 4
});
//for object
const product = {
    name: "mobile",
    price: 23,
    verify: true
};
product.name = 500; //throw error
product.quantity = 2; //trhrow error
product.name = "laptop"; //then ok
//emplicit data type
let a;
a = 34; //throw error
a = "mehedi"; //then ok
