// function sayMyName(){
//     console.log("p");
//     console.log("r");
//     console.log("i");
//     console.log("t");
//     console.log("i");    
// }
// sayMyName()



// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }



function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result

    return num1+num2

    
}

const result = addTwoNumbers(3,5)

// console.log("result",result);

function
 loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage())




function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));



// function with Object


const user = {
    username : "priti",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
/*
handleobject({
    username:"sam",
    price: 399
 })object pass directly */
  
 const myNewArray = [200,400,600,800]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 