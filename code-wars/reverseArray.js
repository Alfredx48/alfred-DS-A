function reverseList(list) {
return list.reverse()
}

const reverseList = (list) => {
  let result = []
  for(let i = list.length - 1; i >= 0; i--) {
    result.push(list[i])
    
  }
  return result
}

const reverseList = (list) => {
  let left  = 0
  let right = list.length - 1
  
  while(left <= right) {
    
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;

    left++;
    right--;
  }
  return list 
}


//* [1,2,3,4] => [4,3,2,1]