// example 1
let n = 2;
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// example 2
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

var climbStairs = function (n) {
  let counts = [];
  counts[1] = 1;
  counts[2] = 2;

  for (let i = 3; i <= n; i++) {
    counts[i] = counts[i - 1] + counts[i - 2];
  }
  return counts[n];
};

console.log(climbStairs(n));
