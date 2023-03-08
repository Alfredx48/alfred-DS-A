class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
    this.shiftItems(index);
    return item
	}
	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]
    this.length--
	}
}

const newArray = new MyArray();
newArray.push("hi");
console.log(newArray.length);
newArray.push("you");
console.log(newArray.length);
// newArray.pop();
console.log(newArray.length);
newArray.delete(1)
console.log(newArray);

/** 
// Initialize an array of strings
const strings = ["a", "b", "c", "d"];

// Add an element to the end of the array
strings.push("e"); //* O(1)

// Remove the last element from the array
strings.pop(); //* O(1)

// Add an element to the beginning of the array (shifts all other elements)
strings.unshift("x"); //* O(n)

// Add/Remove elements anywhere in the array without creating a new array (can be used to add, remove, or replace elements)
strings.splice(2, 0, "alien"); //** O(n)

// Remove an element from any position in the array
delete strings[2]; //* O(1)

// Concatenate two arrays together (does not modify either input array)
const newArray = strings.concat(["f", "g"]); //* O(n)

// Sort elements in an array (mutates original array)
strings.sort(); //* O(n log n)

// Reverse the order of elements in an array (mutates original array)
strings.reverse(); //* O(n)

// Find the index of a given element in the array (-1 if not found)
const index = strings.indexOf("b"); //* O(n)

// Iterate through every element in the array (can specify a function to execute on each element)
strings.forEach((element) => console.log(element));

// Use every element in the array to compute a single value (can specify a function that takes two arguments - an accumulator and the current element)
const sum = strings.reduce((accumulator, current) => accumulator + current, 0); //* O(n)

// Filter out elements that do not meet a specified condition (returns a new array)
const filteredArray = strings.filter((element) => element !== "a");

// Map every element in the array to a new value (returns a new array)
const mappedArray = strings.map((element) => element.toUpperCase()); //* O(n)

// Check whether at least one element satisfies a specified condition (returns boolean)
const hasB = strings.some((element) => element === "b"); //* O(n)

// Check whether every element satisfies a specified condition (returns boolean)
const allLowerCase = strings.every((element) => element.toLowerCase() === element); //* O(n)

// Return a subset of the original array starting at a specified index and optionally continuing until a specified index (returns a new array)
const subArray = strings.slice(1, 3); //* O(n)
*/
