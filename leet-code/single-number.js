
// https://leetcode.com/problems/single-number/description/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let found = {};
  for (let i of nums) {
    if (found[i] == null)
      found[i] = 0;
    found[i]++;
  }
  for (let key in found) {
    if (found[key] === 1)
      return Number(key);
    console.log(key);
  }
}
