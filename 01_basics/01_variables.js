const accountId = 144553;
let accountEmail = 'sourav@test.com';
let accountPassword = '12345';
accountCity = 'Kolkata';
let accountState;

// accountId = 2;
accountEmail = 'test';
accountPassword = '234234';
accountCity = 'Goa';

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([
	accountId,
	accountEmail,
	accountPassword,
	accountCity,
	accountState,
]);
