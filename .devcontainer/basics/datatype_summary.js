// primitive - string,number,boolean,null,undefined,symbol,BigInt

// reference(non-primitive)-array,objects,functions

// const score =100
// const scoreValue = 100.3

// const isLoggedIn =false
// const outsideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345654356754326n
console.log(typeof(bigNumber));


// const heros=["shaktiman","naagraj","doga"]

// let myobj ={
//     name:'priti'
//     subject:javascript,
// }

/*
Return type of variables in javascript

1] Primitive Datatypes
    Number =>number
    String =>string
    boolean=>boolean
    null =>object
    undefined=>undefined
    symbol=>symbol
    bigInt =>undefined

2]Non-Primitive Datatype

Arrays=>object
object=>object
function=>function

*/ 


// ************************************ Memory in javascript *********************************************

// stack (primitive),Heap (Non-primitive)

let myYoutubename = "pritichavan.com"
let anothername = myYoutubename
anothername="chaiaurreact"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@upi"
}

let userTwo = userOne

userTwo.email = "prit@google.com"

console.log(userOne.email);
console.log(userTwo.email);



