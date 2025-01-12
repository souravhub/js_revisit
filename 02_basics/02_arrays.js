const marvelHeros = ["thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

const newHeros = marvelHeros.concat(dcHeros);
// console.log(newHeros);

const all_new_heros = [...dcHeros, ...marvelHeros];
// console.log(all_new_heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_array = anotherArr.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("sourav"));
console.log(Array.from("sourav"));
console.log(Array.from({ name: "sourav" })); // interesting

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
