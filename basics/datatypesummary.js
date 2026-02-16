// primitive and non primitive (reference) datatypes
// call by value and call by reference

// primitive : call by value
// 7 types : string, number, boolean, null, undefined, symbol, bigInt
// javaScript is a dynamically typed language because data type will automatically assigned at the time of compilation or code execution.

const score = 100; // number
const scoreValue = 100.3; // number

const isLoggedIn = false; // boolean
const outsidetemp = null; // null
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 345678896764445n

// non primitive : call by reference
// arrays, objects, functions
// the datatype is function, for all non premitive

const heros = ["aliya", "ahmed", "sara", "laura"]; // reference type

let myObj = {
    name: "aliya",
    age: 22,

}

 const myFunction =  function(){
    console.log("hello world");
 }

console.log(typeof bigNumber);
console.log(typeof outsidetemp);

// javascript is a dynamically typed language, sensitive and interpreted.

console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsidetemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);












