// Example 1:

let a =
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  b =
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
// Output: "110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
var addBinary = function (a, b) {
  let sum = 0;
  if (a.length < 53 && b.length < 53) {
    sum = parseInt(a, 2) + parseInt(b, 2);
    return sum.toString(2);
  } else {

  }
};

console.log(calculateBinary("11011+1000")); //=>100011
console.log(calculateBinary("1000-0100")); //=>100
console.log(calculateBinary("1000/0100")); //=>10
console.log(calculateBinary("10*10")); //=>100

console.log(addBinary(a, b));
