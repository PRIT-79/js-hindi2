//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","ninjahatodi"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);


// array method

// myArr.push(6)
// myArr.push(7) //add value in an array
// myArr.pop() //remove value from array

// myArr.unshift(9) //add value in array as first digit [ 9, 0, 1, 2,3, 4, 5] using unshift
// myArr.shift()//romve 9 from array using array.shift()method/array.shift() remove first element from array
// console.log(myArr);

// console.log(myArr.includes(9));//we can check 9 include in our array or not
// console.log(myArr.indexOf(2));//we can check if 2 is exist in our array

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// slice,splice

console.log("A",myArr);//original array


const myn1 = myArr.slice(1,3)//slice method don`t manupulate original array.it gives us output like [1,2] it`s donot take 3 in our array
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)//splice method manupulate original array then it gives us changes.[ 1, 2, 3 ]it take last element using splice method
console.log("c",myArr);

console.log(myn2);







