// const name ="priti"
// const repoCount = 50

// // console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('priti@google')

console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    priti   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://priti.com/priti%20chavan"

console.log(url.replace('%20','-'));

console.log(url.includes('p'));

console.log(gameName.split("  "));





