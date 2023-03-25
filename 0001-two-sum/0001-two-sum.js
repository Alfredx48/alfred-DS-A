/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
let hash ={}
for(let i =0; i < nums.length; i++){
    let diff = target - nums[i]
    if(hash.hasOwnProperty(diff)){
        return [hash[diff], i]
    }
    hash[nums[i]] = i
}
}
