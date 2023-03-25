function deleteNth(arr, n) {
  let countObj = {}
  let result = []
    
  for(let i=0; i < arr.length; i++) {
    if(countObj[arr[i]] === undefined) {
      countObj[arr[i]] = 1
      result.push(arr[i])
    } else if(countObj[arr[i]] < n) {
      countObj[arr[i]]++
      result.push(arr[i])
    }
}
    return result
}


deleteNth([20, 37, 20, 21], 1);
