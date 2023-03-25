// https://leetcode.com/problems/rotate-array/description/
//? Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//? Example 1:
//? Input: nums = [1,2,3,4,5,6,7], k = 3
//? Output: [5,6,7,1,2,3,4]
//? Explanation:
//? rotate 1 steps to the right: [7,1,2,3,4,5,6]
//? rotate 2 steps to the right: [6,7,1,2,3,4,5]
//? rotate 3 steps to the right: [5,6,7,1,2,3,4]

//? Example 2:
//? Input: nums = [-1,-100,3,99], k = 2
//? Output: [3,99,-1,-100]
//? Explanation: 
//? rotate 1 steps to the right: [99,-1,-100,3]
//? rotate 2 steps to the right: [3,99,-1,-100]
 


var rotate = function (nums, k) {
  let last = nums.length
  k %= last
  let startSplice = last - k
  let rotateArr = nums.splice(startSplice, last)
  nums.unshift(...rotateArr)
}

var rotate2 = function(nums, k) {
  if (nums.length === k) {
      return
  } else if (nums.length < k) {
      while(k) {
          k--
          nums.unshift(nums.pop())    
      }
  } else {
      nums.unshift(...nums.splice(nums.length - k))
  }

}

rotate([-1,-100,3,99], 2 )


function widthOfBinaryTree(root) {
  if (!root) {
    return 0;
  }
  
  let queue = [[root, 0]];
  let maxWidth = 0;
  
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelLeft = null;
    let levelRight = null;
    
    for (let i = 0; i < levelSize; i++) {
      let [node, index] = queue.shift();
      
      if (node) {
        if (levelLeft === null) {
          levelLeft = index;
        }
        levelRight = index;
        
        if (node.left) {
          queue.push([node.left, 2 * index]);
        }
        if (node.right) {
          queue.push([node.right, 2 * index + 1]);
        }
      }
    }
    
    if (levelLeft !== null && levelRight !== null) {
      maxWidth = Math.max(maxWidth, levelRight - levelLeft + 1);
    }
  }
  
  return maxWidth;
}
