let user = {
	age: 54,
	name: "Alfred",
	magic: true,
	scream: function() {
		console.log("AHHHHHHHHH!");
	},
};

console.log(user.name);
user.spell = "Expulso";
user.scream();
delete user.age;
console.log(user);


//* hash/object require you to use strings as keys or they strigify the keys.
//* map allows you to use any data type as the key, even a function. only in newer E6
//* map also allows you to insert data in order

const a = new Map()

const b = new Sets()