const user = {
    username:"priti",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);//this refers current context 
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username= "priti"
//     console.log(this.username);
    
// }
// chai()


// const chai = function (){
//     let username = "priti"
//     console.log(this.username);
    
// }


// const chai =  () => {
//     let username = "priti"
//     console.log(this);
    
// }
// chai()

// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(3,5));  //arrow function 


// const add =(num1,num2) => num1 +num2 
// console.log(add(4,5));    //implicite return arrow function  - in this function we can't use curly braces


// const addtwo = (num1,num2) => {num1 + num2}

const  addtwo = (num1,num2) => ({username : "priti"})

console.log(addtwo(3,4));



