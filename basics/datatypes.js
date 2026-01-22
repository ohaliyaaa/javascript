"use strict"; // use strict treats all jvascript code as newer version 

// this is a single line comment
/* this is a multi-line comment*/

// alert (3 + 3) // we are using nodejs, not browser

console.log(3+3); // this is a readable code
console.log("aliya"); // this is also a readable code

console.log(3
    +
    3) // code readability should be high. this is not a good practice. avoid writing code like this. NOT READABLE

// ecmacript is the standard (rules) that define how javascript works (tc39.es).

let name = "aliya khan";
let age = 18;
let isLoggedIn = true;
let state;

// list of primitive datatypes in javascript
// number => 2 to power 53 is the range of number
// bigInt: when the number is too large, used in trading websites
// string: single or double quotes, preferable use double quotes
// boolean: true to false
// null: standalone value/empty value
// undefined: not assigned a value yet
// symbol: unique

// object

//typeof operator is used to check the datatype.
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);
console.log(typeof null);

// the typeof null is object
// the typeof undefined is undefined
// the typeof name is string
// the typeof age is number
// the typeof state is undefined

// primitive datatypes: primitive types are simple data values.
// they store one value and are immutable (cannot be changed directly).

// in javascript, primitive types are:
// string, number, boolean, undefined, null, symbol, bogint

// non-primitive datatypes: non-primitive data types are complex data types that can store multiple values and methods.
// examples of non-primitive types in javascript: 
// object, array, function, date, map/set


