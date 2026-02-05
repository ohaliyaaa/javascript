// datatype conversion
let score1 = 33
console.log(typeof score1); // number

let score2 = "33abc";
console.log(typeof score2); // string

// if you want to perform operation on numbers u can do this
// we converted string into number by creating a variable then putting 
// Number and then the variable we want to convert.
// to make sure that the value is a number and not NaN.
// you must check the valueInNumber.
let valueInNumber = Number (score2);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);

let score3 = null;
console.log(score3);
let valueInNumber1 = Number (score3);
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1);
//let say we have a score as null
// when we convert this into number it will give us 0

let score4 = undefined;
console.log(score4);
let valueInNumber2 = Number (score4);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2);
//let say we have a score as undefined
// when we convert this into number it will give us NaN

let score5 = true;
console.log(score5);
let valueInNumber3 = Number (score5);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3);
//let say we have a score as true
// when we convert this into number it will give us 1
// and if we have false then it will give us 0.

let score6 = "aliya";
console.log(score6);
let valueInNumber4 = Number (score6);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4);
// lets say we have a score as hitesh
// when we convert this into number it will give us NaN.

// if u convert "33" => it will easily convert into 33.
// if u convert "33abc" => it will give u NaN and its type is number.
// if u convert true => it will easily convert into 1.
// if u convert false => it will easily convert into 2.

let isloggedIn = 1;
let booleanIsloggedIn = Boolean (isloggedIn);
console.log(isloggedIn); // this is 1
console.log(booleanIsloggedIn); // this is true
// if you convert 1 into boolean it will give true

let isloggedIn1 = ""
let booleanIsloggedIn1 = Boolean(isloggedIn1);
console.log(isloggedIn1);
console.log(booleanIsloggedIn1); 
// if you convert "" into boolean it will give you false
// and if you give it some name it will give you true

// in boolean 1 is true and 0 is false
// some name is true and empty string is false

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(someNumber);
console.log(typeof stringNumber);
console.log(typeof someNumber);
// if we convert number into string it will give us the number.
// but the type will be string.








