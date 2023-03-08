// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(A) {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

function maxSubArray(nums) {
  return findMaxSubArray(nums, 0, nums.length - 1);
}

function findMaxSubArray(nums, low, high) {
  if (low === high) {
    return nums[low];
  }
  
  const mid = Math.floor((low + high) / 2);
  
  const leftMaxSum = findMaxSubArray(nums, low, mid);
  const rightMaxSum = findMaxSubArray(nums, mid + 1, high);
  const crossMaxSum = findMaxCrossingSubArray(nums, low, mid, high);
  
  return Math.max(leftMaxSum, rightMaxSum, crossMaxSum);
}

function findMaxCrossingSubArray(nums, low, mid, high) {
  let leftSum = -Infinity;
  let sum = 0;
  for (let i = mid; i >= low; i--) {
    sum += nums[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }
  
  let rightSum = -Infinity;
  sum = 0;
  for (let i = mid + 1; i <= high; i++) {
    sum += nums[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }
  
  return leftSum + rightSum;
}
