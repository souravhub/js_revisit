const name = "sourav";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sourav-fc");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("u"));

const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  sourav   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://sourav.com/sourav%20sam";

console.log(url.replace("%20", "-"));

console.log(gameName.split("-"));
