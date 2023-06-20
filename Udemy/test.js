// function maximizeMinimum(X, Y, A) {
// 	if(X === 0 && Y === 0) {
// 			return Math.min(...A);
// 	}

// 	while(true) {
// 			// Sort the array
// 			A.sort((a, b) => a - b);
			
// 			// If the smallest number can be increased without making it larger than the largest number after 'Y' is subtracted from it
// 			if(A[0] + X <= A[A.length - 1] - Y) {
// 					A[0] += X;
// 					A[A.length - 1] -= Y;
// 			} else {
// 					// Break the loop if no more changes can be made
// 					break;
// 			}
// 	}

// 	// Return the smallest number in A (which will be at index 0 since A is sorted)
// 	return A[0];
// }

// console.log(maximizeMinimum(0, 0, [1]));  // Outputs: 1
// console.log(maximizeMinimum(2, 2, [5, 5, 5]));  // Outputs: 5
// console.log(maximizeMinimum(2, 2, [1, 2, 3]));  // Outputs: 3
// console.log(maximizeMinimum(2, 2, [3, 2, 1]));  // Outputs: 3
// console.log(maximizeMinimum(2, 2, [-1, -5, -9]));  // Outputs: -1
// console.log(maximizeMinimum(10, 2, [1, 5, 9]));  // Outputs: 9

function duplicateEncode(word){
	const once = '('
	const more = ')'
	let res= ""
	let hash = {}
	
	for( let i=0; i < word.length; i++) {
		if(hash.hasOwnProperty(word[i])) {
				hash[word[i]]++
		}
			else {
		hash[word[i]] = 1
				}
	}

for(key in hash) {
	// console.log(hash)
	if(hash[key] === 1) {
//       console.log("once")
		res += once
	}
	else {
//       console.log(more)
	res += more
	}
}
return res
}
console.log(duplicateEncode("din"))
