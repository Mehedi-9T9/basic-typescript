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
let n;
n = "34";
n = 40; // then ok
const fol = [];
fol.push("banana"); //then no error
fol.push(23); //show error
//union Type
const all = [];
all.push(23);
all.push("text");
all.push({ id: 1 }); // then show error
//same code but ok
const dol = [];
dol.push(23);
dol.push("text");
dol.push({ id: 1 }); // then ok
//array of object empliciv type
let person;
person =
    {
        name: "mehedi",
        age: 24,
        isMarrid: false
    };
//function type check
let myFun;
myFun = () => {
    console.log("Hello Fun");
};
//paramerers Types chek
const sum = (a, b, c) => {
    return a + b;
};
// console.log(sum("2", 5));
console.log(sum(2, 5));
console.log(sum(2, 5, 3));
const user = {
    name: "mehedi",
    age: 24,
    isMarried: true
};
const typeCheck = (id, user) => {
    console.log(id);
    console.log(user);
};
console.log(typeCheck(12, user));
//class singneture
class player {
    constructor(n, a, s) {
        this.name = n,
            this.age = a,
            this.status = s;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const mehedi = new player("mehedi", 23, "marrid");
console.log(mehedi);
