// Example 1:

// let x = 4;
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

Input: x = 101
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  for (let i = 2,j = 2; i <= x, j <= x; i++, j++) {
    // console.log(i)

    // console.log(i * j === x);
    if (i * j === x) return i;
    if (i * j > x) return i - 1
  }
};

console.log(mySqrt(x));

// const x = 2
// let y = 4
// function update(arg){
//   console.log(Math.random() + y * arg);
//   return Math.random() + y * arg
// }

// y = 2
// y+=1
// const result = update(x)

// console.log(result, ' <--- result')
