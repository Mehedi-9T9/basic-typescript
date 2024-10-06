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


//function type check
let myFun: Function
myFun = () => {
    console.log("Hello Fun");
}

//paramerers Types chek
const sum = (a: number, b: number, c?: number) => {
    return a + b
}
// console.log(sum("2", 5));
console.log(sum(2, 5));
console.log(sum(2, 5, 3));


//aliases type ckeck
type stringOrNumber = string | number
type person = {
    name: string,
    age: number,
    isMarried: boolean
}
const user = {
    name: "mehedi",
    age: 24,
    isMarried: true
}
const typeCheck = (id: stringOrNumber, user: person) => {
    console.log(id);
    console.log(user);
}

console.log(typeCheck(12, user));

//class singneture
class player {
    name: string
    age: number
    status: string
    constructor(n: string, a: number, s: string) {
        this.name = n,
            this.age = a,
            this.status = s
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}
const mehedi = new player("mehedi", 23, "marrid")
console.log(mehedi);

//access modifire
class student {
    public name: string;
    private id: number;
    readonly class: string;

    constructor(n: string, i: number, c: string) {
        this.name = n,
            this.id = i,
            this.class = c
    }
    pressent() {
        console.log(`${this.name} is attend in class ${this.class}`);
    }
}
const tushar = new student("tushar", 1133, "seven")
console.log(tushar.name); // this is public access no error
console.log(tushar.id); // this is private access show error
console.log(tushar.class); // this is read only access just read but never modify
tushar.class = "eight" // never modify

//shotcut
// class student {
//     constructor({
//         public name: string;
//         private id: number;
//         readonly class: string;

//     })
//     pressent() {
//         console.log(`${this.name} is attend in class ${this.class}`);
//     }
// }

//interface using
interface nayok {
    name: string,
    movies: string,
    id: number
}
const perform = (nayok: nayok) => {
    const text = `${nayok.name} is dunsing in ${nayok.movies} movies`
    return text
}
//class er jonno o interface use kora hoi