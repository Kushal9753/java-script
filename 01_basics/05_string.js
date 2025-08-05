const name = "kushal "
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String(`kushal-sahu-btech-indore`)

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,5)
console.log(newString)

const anotherSting = gameName.slice(-2, 2)
console.log(anotherSting)

const newStringOne = "          kushal          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kushal.com/kushal%20sahu"

console.log(url);

console.log(url.replace('%20','-'));

console.log(url.includes('kushal'));

console.log(gameName.split('-'));


