
// var c =300

let a =400
if(true){
    let a = 10
    const b= 20
//    console.log("inner :" ,a);
   
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="priti"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
     two()
}
//one()

if(true){
    const username ="pritii"
    if(username === "pritii"){
        const website = "youtube"
        // console.log(username  +  website);
        
    }
    // console.log(website);
    
}
// console.log(username)


// ++++++++++++++++++++++++++++++++++++++++++  interesting   ++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num +2
}
addTwo(5)

