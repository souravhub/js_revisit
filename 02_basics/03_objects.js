// singleton
// Object.create()
// Object literals
const mySym = Symbol("key1");

const jsUser = {
	name: "sourav",
	"full name": "Sourav Samanta",
	[mySym]: "mykey1",
	age: 29,
	location: "Kolkata",
	email: "test@test.com",
	isLoggedIn: false,
	lastLoginDays: ["monday", "wednesday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "same@mail.com";

// console.log(jsUser["email"]);
// Object.freeze(jsUser);
jsUser.email = "same@tesla.com";
// console.log(jsUser["email"]);

jsUser.greetings = function () {
	console.log(`hello JS user, ${this["full name"]}`);
};

console.log(jsUser.greetings());
