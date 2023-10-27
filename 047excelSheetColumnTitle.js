// Example 1:
// let columnNumber = 1
// Output: "A"

// Example 2:
// let columnNumber = 28
// Output: "AB"

// Example 3:
let columnNumber = 701
// Output: "ZY"

var convertToTitle = function(columnNumber) {
  console.log(columnNumber);
  let res = '';
  while (columnNumber >= 0) {
    res = String.fromCharCode(columnNumber % 26 + 64) + res;
    console.log(res, ' <-- res');
    columnNumber = Math.floor(columnNumber / 26) - 1;
  }
  return res
};

console.log(convertToTitle(columnNumber));
