//? [0,3,4,31] + [4, 6, 30] = [0,3,4,4,6,30,31]

//! O(n log n)
function mergeSortedArrays(arr1, arr2) {
	const t0 = performance.now();
	let copy = arr1.concat(arr2);
	copy.sort((a, b) => a - b);
	const t1 = performance.now();
	console.log(`time in mili => ${t1 - t0}`);
	return copy;
}

//! O(n)
function mergeSortedArrays2(arr1, arr2) {
	const t0 = performance.now();

	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
	}
	const mergedArr = [];
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
	let i = 1;
	let j = 1;

	while (arr1Item || arr2Item) {
		if (!arr2 || arr1Item < arr2Item) {
			mergedArr.push(arr1Item);
			arr1Item = arr1[i];
			i++;
		} else {
			mergedArr.push(arr2Item);
			arr2Item = arr2[j];
			j++;
		}
	}
	const t1 = performance.now();
	console.log(`time in mili => ${t1 - t0}`);
	return mergedArr;
}

//! O(n)
function mergeSortedArrays3(arr1, arr2) {
	const t0 = performance.now();
	// validate input
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		throw new Error("Both arguments must be arrays");
	}

	if (arr1.length === 0) {
		return arr2;
	}

	if (arr2.length === 0) {
		return arr1;
	}

	const mergedArr = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (arr2[j] === undefined || arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else if (arr1[i] === undefined || arr1[i] >= arr2[j]) {
			mergedArr.push(arr2[j]);
			j++;
		}
  }
  
  const t1 = performance.now();
  
	console.log(`time in mili => ${t1 - t0}`);

	return mergedArr;
}

//! O(n)
function mergeSortedArrays4(arr1, arr2) {
	const t2 = performance.now();
	let merged = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	console.log(`mid way log = ${merged}`);

	// append remaining elements of arr1 or arr2 to merged array
	while (i < arr1.length) {
		merged.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		merged.push(arr2[j]);
		j++;
	}

	const t3 = performance.now();

	console.log(`time in mili => ${t3 - t2}`);

	return merged;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31]
// console.log(mergeSortedArrays([1, 2, 5], [])); // [1,2,5]
// console.log(mergeSortedArrays([], [])); // []
console.log("1 : O(n log n)");
console.log(mergeSortedArrays([10, 13, 17], [12, 16, 21])); // [10,12,13,16,17,21]
console.log("2 : O(n)");
console.log(mergeSortedArrays2([10, 13, 17], [12, 16, 21])); // [10,12,13,16,17,21]
console.log("3 : O(n)");
console.log(mergeSortedArrays3([10, 13, 17], [12, 16, 21])); // [10,12,13,16,17,21]
console.log("4 : O(n)");
console.log(mergeSortedArrays4([10, 13, 17], [12, 16, 21])); // [10,12,13,16,17,21]
