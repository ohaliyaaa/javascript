let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2) // addition
console.log(2-2) // subtraction
console.log(2*2) // multiplication
console.log(2**2) // power
console.log(2/2) // division
console.log(2%2) // remainder or modulus

let str1 = "hello";
let str2 = " i am aliya";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 5 % 3); // use parenthesis
console.log(true); // it will give true
console.log(+true); // confusing code, will give one
// console.log(true+); // it will give error
console.log(+""); // confusing code, will give zero

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // there is no consistencey, bad code. readability

let gameCounter = 100;
gameCounter++; // post fix
console.log(gameCounter);

let gameCounter1 = 100;
++gameCounter1; // pre fix
console.log(gameCounter1);

// stack and heap memories in javascript
// we have 2 types of memories in javascript: stack and heap
// all the primitive data types use stack memory
// all the non-primitive data types use heap memory.

let myYoutubeName = "aliyakhandotcom";
let anotherName = myYoutubeName;
anotherName = "saraali";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    bank: "hbl@ybl",
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email)
console.log(userTwo.email)





