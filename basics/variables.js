// a variable is a container used to store data that can change later.
// in javascript variables are declared using let and var (old one).

// a constant stores data that cannot be changed once assigned.
// in javascript, constants are declared using: const keyword.

const accountId = 144553
let accountEmail = "ohaliya@google.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// const is used to declare a variable that cannot be reassigned
// accountId = 2222 // not allowed 

accountEmail = "omg@google.com"
accountPassword = "22889"
accountCity = "Karachi"
console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* PREFER NOT TO USE VAR
BECAUSE OF ISSUE IN BLOCK SCOPE AND
FUNCTIONAL SCOPE */




