var c = 300;

let a = 300;

if (true) {
	let a = 10;
	const b = 20;
	var c = 30;

	// console.log(a, "INNER");
}

// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
	const userName = "sourav";

	function two() {
		const website = "youtube";
		console.log(userName);
	}
	// console.log(website);

	two();
}

// one();

if (true) {
	const username = "sourav";

	if (username === "sourav") {
		const website = " youtube";

		// console.log(username + website);
	}

	// console.log(website);
}

// console.log(username);

// ++++++++++ Intersting Discussion +++++++++++++
console.log(addOne(5));

function addOne(num) {
	return num + 1;
}

console.log(addTwo(5));

const addTwo = function (num) {
	return num + 2;
};
