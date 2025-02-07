const accountId = 1234
let accountName = "pc@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState

// accountId = 2 not allowed

accountName = "pc123@google.com"
accountPassword = "1212"

/*
prefer not to use var
because of issue in functional scope
*/


console.log(accountId);

console.table([accountId,accountName,accountPassword,accountCity,accountState])