// https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
	let hash = {};
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (hash.hasOwnProperty(diff)) {
			return [hash[diff], i];
		}
		hash[nums[i]] = i;
	}
};

// Generate a large input array with 10 million elements
const arr = new Array(10000000).fill().map((_, i) => i);

// Shuffle the array
for (let i = arr.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

// Define the target value
const target = 12345678;

// Measure the time it takes to execute the twoSum function
const t0 = performance.now();
const result = twoSum(arr, target);
const t1 = performance.now();

// Print the result and the execution time
console.log(result); // [1234568, 1111111]
console.log(`Execution time: ${t1 - t0} ms`);


