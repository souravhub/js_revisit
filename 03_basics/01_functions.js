function sayMyName() {
	console.log("H");
	console.log("I");
	console.log("T");
	console.log("E");
}

// sayMyName();

// function addTwoNums(num1, num2) {
// 	console.log(num1 + num2);
// }
function addTwoNums(num1, num2) {
	return num1 + num2;
	// let result = num1 + num2;
	// return result;
	// console.log("check");
}

const result = addTwoNums(3, 5);

// console.log(result, "res");

function loginUserMsg(userName = "user") {
	if (userName) return `${userName} just logged in`;
	console.log("please enter user name");
	return;
}

// console.log(loginUserMsg());

function calCulateCartPrice(...num1) {
	return num1.length;
}

console.log(calCulateCartPrice(200, 400, 500));

const user = {
	userName: "sourav",
	price: 99,
};

function handleObject(anyObject) {
	console.log(
		`user name is ${anyObject.userName} and price is ${anyObject.price}`
	);
}

// handleObject(user);
handleObject({ userName: "Sam", price: 499 });

const myNewArr = [200, 400, 100, 600];

function returnSecondValue(getArr) {
	return getArr[1];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([7, 9, 5, 6]));
