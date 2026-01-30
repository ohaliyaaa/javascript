let scoreOne = 33; // declared a variable named scoreOne with a value 33
console.log(typeof scoreOne); // the typeof scoreOne is number

let scoreTwo = "33"; // declared a variable named scoreTwo with a value "33"
console.log(typeof scoreTwo); // the typeof scoreTwo is string

let valueInNumber = Number(scoreTwo); // declared another variable named as valueInNumber in which we converted string into number using Number and then the variable which needs to be converted.
console.log(typeof valueInNumber); // the type in valueInNumber is number

let scoreThree = undefined; // declared another variable as scoreThree with a value "33abc"
let valueInNumber1 = Number(scoreThree); // // declared another variable named as valueInNumber1 in which we converted string into number using Number and then the variable which needs to be converted.
console.log(typeof valueInNumber1); // the type in valueInNumber is number.
console.log(valueInNumber1); // the value of valueInNumber1 is NaN.

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "aliya";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "aliya" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)

