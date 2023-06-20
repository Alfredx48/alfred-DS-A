const numbers = [341, 5]
const target = 3
function twoSum(numbers, target) {
    let numSet = new Map()
    
    for(let i=0; i < numbers.length; i++) {
    //   console.log(numSet)
      let num = numbers[i]
      let diff = target - num
      if(numSet.has(diff)) {
        return [i, numSet.get(diff)]
      }
        numSet.set(num, i)
    }
    return console.error("no pairs found")
}
    
console.log('%cHello', 'color: green; background: yellow; font-size: 30px');
console.log(twoSum(numbers, target))