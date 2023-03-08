//? Create a func that reverses a string:
//? "Hi my name is alfred" should be
//? "derfla si eman ym iH"

function reverseString(string) {
	if (!string || string.length < 2 || typeof string !== "string")
		return "try again bozo";
	let result = [];
	let totalItems = string.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		result.push(string[i]);
	}
	return result.join("");
}

const reverseString2 = (string) => string.split("").reverse().join("");

const reverseString3 = (string) => [...string].reverse().join("");

console.log(reverseString("Hi my name is alfred"));
console.log(reverseString2("Hi my name is alfred"));
console.log(reverseString3("Hi my name is alfred"));
console.log(reverseString([]));
