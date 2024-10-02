// const country = " my country Bangladesh 2.0"
// const nam: string = "Mehedi"
// console.log(country, nam);

//Basic Types

//for string
let text = "Neymar"
text = 10 //throw arror because gace this variale type string
text = "Messi" // then ok
console.log(text);

//for Number
let roll = 2
roll = "3" // throw error
roll = 5 //then ok

//for fuction
const multiply = (x: number, y: number) => {
    return x + y

}
console.log(multiply("3", 3));  //throw error
console.log(multiply(2, 3));

//for array
const fruits = ["banana", "orange", "apple", 4, {}]
fruits.push(49)
fruits.push({
    quantity: 4
})

//for object
const product = {
    name: "mobile",
    price: 23,
    verify: true
}
product.name = 500 //throw error
product.quantity = 2 //trhrow error
product.name = "laptop" //then ok

//emplicit data type
let a: string;
a = 34 //throw error
a = "mehedi" //then ok


let n: number;
n = "34"
n = 40 // then ok

const fol: string[] = []
fol.push("banana") //then no error
fol.push(23) //show error

//union Type
const all: (string | number)[] = []
all.push(23)
all.push("text")
all.push({ id: 1 }) // then show error

//same code but ok
const dol: (string | number | {})[] = []
dol.push(23)
dol.push("text")
dol.push({ id: 1 }) // then ok

//array of object empliciv type
let person: {
    name: string,
    age: number,
    isMarrid: boolean
}

person =
{
    name: "mehedi",
    age: 24,
    isMarrid: false
}
