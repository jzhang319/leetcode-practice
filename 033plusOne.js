// Example 1:

// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

Input: digits = [9,9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

var plusOne = function (digits) {
  if (digits.length == 1 && digits[digits.length - 1] == 9) {
    digits.pop()
    console.log(digits)
    digits.push(1,0)
    return(digits)
  }
  if (digits.length > 2 && digits[digits.length - 1] == 9) {
    
  }
  digits[digits.length-1]++
  return digits
};

console.log(plusOne(digits));
