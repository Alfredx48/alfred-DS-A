// const arr = [1, 2, 3, 9]
// const sum = 8
// const arr2 = [1, 2, 4, 4]


const hasPairWithSum = (arr, sum) => {
  let left = 0
  let right = arr.length - 1
  
  while (left < right) {
    let currSum = arr[left] + arr[right]
    if (currSum === sum) {
      return [arr[left], arr[right]]
    } 
    else if (currSum < sum) {
      left++
    } else {
      right --
    }
  }
  return null
}

function sumPairs(ints, s) {
  const numSet = new Set()
  ints.forEah(num => {
    
    let num = ints[i]
    let diff = s - num
    if(numSet.has(diff)) {
     return [diff, num]
    }
    numSet.add(num)
  
  })
  }

// Test case 1: Array with two elements that add up to the target sum
console.log(hasPairWithSum([1, 2], 3)); // Expected output: [1, 2]

// Test case 2: Array with multiple elements that add up to the target sum
console.log(hasPairWithSum([1, 2, 3, 4, 5], 7)); // Expected output: [2, 5]

// Test case 3: Array with no elements that add up to the target sum
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // Expected output: false

// Test case 4: Array with negative numbers
console.log(hasPairWithSum([-1, 2, 3, 4, 5], 1)); // Expected output: [-1, 2]

// Test case 5: Array with repeated numbers
console.log(hasPairWithSum([1, 2, 2, 3, 4], 4)); // Expected output: [2, 2]

// Test case 6: Array with all elements being the same
console.log(hasPairWithSum([5, 5, 5, 5, 5], 10)); // Expected output: [5, 5]

// Test case 7: Array with zero as an element
console.log(hasPairWithSum([1, 2, 0, 4, 5], 5)); // Expected output: [0, 5]


