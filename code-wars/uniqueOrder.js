//* https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
  const input = typeof iterable === "string" ? iterable.split("") : iterable
  const strArr = [...input]
  
  for(let i=0; i < strArr.length; i++ ) {
    if(strArr[i] === strArr[i + 1]) {
      strArr.splice(i, 1)
      i--
    }
  }
    return strArr
}
  
console.log(uniqueInOrder("AAAABBBCCDAABBB")); // Output: [ 'A', 'B', 'C', 'D', 'A', 'B' ]
console.log(uniqueInOrder([1, 2, 2, 3, 4, 4, 4, 5])); // Output: [ 1, 2, 3, 4, 5 ]