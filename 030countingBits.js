// Example 1:

let n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

var countBits = function(n) {
  let bits = []

  for (let i = 0; i <= n; i++) {
    // console.log(i.toString(2))
    bits.push(i.toString(2).split('1').length - 1)
  }
  return bits
};


console.log(countBits(n))
