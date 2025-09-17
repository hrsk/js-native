let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1) // string
console.log(typeof str2) // string
console.log(typeof val1) // undefined
console.log(typeof val2) // Object
console.log(typeof myNum) // number


const myName = 'Yegor';
const myAge = 32;
const canCodeJS = true

console.log(`Hello, my name is ${myName}, I am ${myAge} years old and I can code JavaScript: ${canCodeJS}`)

// 2.3
const valueA = prompt("", "0");
const valueB = prompt("", "0");

function theorem() {

    const c = (Number(valueA)**2 + Number(valueB)**2) ** 0.5
    // const c = Math.sqrt(Number(valueA)**2 + Number(valueB)**2)

    return console.log(c)
}

theorem();

// 2.4
let a = 1;
let b = 1;
let c = 1;

// a = a + b;
// a = a / b;
// c = c % b;

console.log(a, b, c);

console.log(a += b);
console.log(a /= b);
console.log(c %= b);

