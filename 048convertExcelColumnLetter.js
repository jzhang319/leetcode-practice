// Example 1:

// let columnTitle = "A"
// Output: 1
// Example 2:

// let columnTitle = "AB"
// Output: 28
// Example 3:

let columnTitle = "ZY";
// Output: 701

var titleToNumber = function (columnTitle) {
  // ABC
  // A --> (0*26) + (65 - 64), B --> (1*26) + (66 - 64), c --> (28*26) + (67 - 64)

  let sum = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    sum = sum * 26 + (columnTitle.charCodeAt(i) - 64);
  }
  return sum;
};

console.log(titleToNumber(columnTitle));
