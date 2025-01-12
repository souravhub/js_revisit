const tinderUser = new Object();
// const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
	email: "sam@gmail.com",
	fullName: {
		userFullName: {
			firstName: "Sourav",
			lastName: "Sam",
		},
	},
};

// console.log(regularUser.fullName?.userFullName?.firstName);

const obj1 = {
	1: "a",
	2: "b",
};
const obj2 = {
	3: "a",
	4: "b",
};

// const obj3 = { ...obj1, ...obj2 };

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const users = [
	{
		id: 1,
		email: "s@mail.com",
	},
	{
		id: 1,
		email: "s@mail.com",
	},
	{
		id: 1,
		email: "s@mail.com",
	},
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
	courseName: "js i hindi",
	price: 999,
	courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company})=>{

// }

// navbar(company = 'hitesh')

// {
//   'name': 'sourav',
//   'courseName': 'js in hindi',
//   'price': 'free'
// }

[{}, {}, {}];
