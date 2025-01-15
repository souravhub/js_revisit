const user = {
	username: "sourav",
	price: 999,
	welcomeMsg: function () {
		console.log(`${this.username} ,  welcome to website`);
		console.log(this);
	},
};

// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg();

// console.log(this);

// function chai() {
// 	let username = "sourav";
// 	console.log(this.username);
// }

// chai();

// const chai = function () {
// 	let username = "sourav";
// 	console.log(this.username);
// }

// chai();

const chai = () => {
	let username = "sourav";
	console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
// 	return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
	username: "sourav",
});

console.log(addTwo(3, 4));

const myArr = [2, 5, 3, 8];

// myArr.forEach(() => {});
