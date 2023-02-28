const n = 1000000; // number of elements in the array

// O(n) time complexity
const t0 = performance.now();
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += i;
}
const t1 = performance.now();

console.log(`Sum of integers from 0 to ${n - 1} is ${sum}`);
console.log(`Linear time operation took ${t1 - t0} milliseconds`);

// O(1) time complexity
const t2 = performance.now();
const product = n * (n - 1) / 2;
const t3 = performance.now();

console.log(`Sum of integers from 0 to ${n - 1} is ${product}`);
console.log(`Constant time operation took ${t3 - t2} milliseconds`);
