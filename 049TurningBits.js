// Example 1:
let n = 00000010100101000001111010011100;
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Example 2:
// let n = 11111111111111111111111111111101;
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let lastBit = n & 1;

    let revBit = lastBit << (31 - i);

    result = result | revBit;

    n = n >>> 1;
  }

  return result >>> 0;
};

console.log(reverseBits(n));
