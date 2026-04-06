const accountID = 1008469  // constant is not changable
// variable can be declare in two ways usin let and var key board 
let accountEmail="prithviraj@google.com" // let isbest practice 
var accountPassword="12345" // prefer not to use 
accountCity="Jaipur"  // by default take let , not good practice 
let accountState;  // we not initialized 

// accountID=6647473 // const not allowed to change 
/* note :- Prefer not to use var 
because of issue in block scope and functional scope 
*/ 
console.log(accountID);
accountEmail = "rajprithvi@gmail.com"
accountPassword = "54321"
accountCity = "bengaluru"
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
