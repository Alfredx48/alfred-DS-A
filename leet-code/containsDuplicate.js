// https://leetcode.com/problems/contains-duplicate/solutions/?orderBy=most_votes&languageTags=javascript
//? Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//* Example 1:
//* Input: nums = [1,2,3,1]
//* Output: true

//* Example 2:
//* Input: nums = [1,2,3,4]
//* Output: false

//* Example 3:
//* Input: nums = [1,1,1,3,3,4,3,2,4,2]
//* Output: true

// const containsDuplicate = (nums) => new Set(nums).size !== nums.length

// const containsDuplicate2 = (nums) => {
//     const hash = {}
//     for(let i=0; i < nums.length; i++) {
//         hash[nums[i]] = true
//     }
//     console.log(hash)
//  return Object.keys(hash).length !== nums.length ? true : false
// };


// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
// console.log(containsDuplicate([1,2,3,4]))
// console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))
// console.log(containsDuplicate2([1, 2, 3, 4]))



function objectSolution(nums) {
  let testObj = {};
  for (var i = 0; i < nums.length; i++) {
    let aNum = nums[i];
    if (testObj[aNum]) {
      return true;
    } else {
      testObj[aNum] = true;
    }
  }

  return false;
}

function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}

function runTest(testFunction, testArray) {
  console.log('   Running test:', testFunction.name);
  let start = performance.now();
  let result = testFunction(testArray);
  let end = performance.now();
  console.log('      Duration:', end - start);
}

let arr = [];
let setSize = 10000000;
for (var i = 0; i < setSize; i++) {
  arr.push(i);
}
console.log('Set size:', setSize);
runTest(objectSolution, arr);
runTest(setSolution, arr);
