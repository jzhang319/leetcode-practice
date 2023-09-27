// Example 1:

// let x = 4;
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

Input: x = 101
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function (x) {
 if (x <= 1) return x;
  for (let i = 2; i <= x; i++) {
    // console.log(i)
    if (i * i === x) return i;
    if (i * i > x) return i - 1
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
