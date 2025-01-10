// Premititive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
// const score:number = 100

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 2342352453453452n;

// Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const myObj = {
	name: "sourav",
	age: 29,
};

const myFunction = function () {
	console.log("Hello World");
};

// console.log(typeof bigNumber);

// =+=+=+=+=+=+=+=+==+++++++=============++++++++

// Stack (Premitive), Heap (Non Premitive)

let myYoutubeName = "bSharp";
let anotherName = myYoutubeName;
anotherName = "Nothing";

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
	email: "learning@js.com",
	upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "sourav@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
