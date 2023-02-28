//? Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//? For Example:
//? const array1 = ['a', 'b', 'c', 'x'];
//? const array2 = ['z', 'y', 'i'];
//? should return false.
//-----------
//? const array1 = ['a', 'b', 'c', 'x'];
//?const array2 = ['z', 'y', 'x'];
//? should return true.

//? 2 parameters - arrays - no size limit
//? return true or false

//! Brute Force O(n^2)

// function containsCommonItem(arr1, arr2) {
// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = 0; j < arr2.length; j++) {
// 			if (arr1[i] === arr2[j]) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }

//!Hash Table O(n)

// let hash = arr2.reduce((obj, item) => {
//   obj[item] = true
//   return obj;
// }, {})

function containsCommonItem2(arr1, arr2) {
	let hashTable = {};
	for (let j = 0; j < arr2.length; j++) {
		hashTable[arr2[j]] = true;
	}
	// console.log(hashTable);
	for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (hashTable[item]) {
      return true;
    }
  }
  return false
}

const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const array2 = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const array3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const array4 = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'g']

console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem2(array3, array4));
