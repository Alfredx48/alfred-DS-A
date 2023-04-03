//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
function firstRecurringCharacter(input) {
  let hash = {};
  for (let i = 0; i < input.length; i++) {
    if (hash[input[i]]) {
      return input[i];
    } else {
      hash[input[i]] = true;
    }
  }
  return undefined;
}

const firstRecurringCharacter1 = (input) => {
  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
};

// Performance test
const largeArray = [];
for (let i = 0; i < 100000; i++) {
  largeArray.push(i);
}
largeArray.push(1);

const t0 = performance.now();
console.log(firstRecurringCharacter(largeArray));
const t1 = performance.now();
console.log(`firstRecurringCharacter took ${(t1 - t0).toFixed(4)} milliseconds`);

const t2 = performance.now();
console.log(firstRecurringCharacter1(largeArray));
const t3 = performance.now();
console.log(`firstRecurringCharacter1 took ${(t3 - t2).toFixed(4)} milliseconds`);



 
