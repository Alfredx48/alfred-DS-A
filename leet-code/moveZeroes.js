

var moveZeroes = function(nums) {
  for(let i=0; i < nums.length; i++) {
      if(nums[i] === 0) {
          delete nums[i]
          nums.push(0)
      }
  }
  return nums
};

moveZeroes([0,1,0,3,12])