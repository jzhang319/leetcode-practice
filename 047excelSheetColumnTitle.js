// Example 1:
// let columnNumber = 1
// Output: "A"

// Example 2:
let columnNumber = 28;
// Output: "AB"

// Example 3:
// let columnNumber = 701;
// Output: "ZY"

var convertToTitle = function (columnNumber) {
  let string = "";
  let key = [
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
  ];
  if (columnNumber <= 0) {
    return string;
  }
  while (columnNumber > 0) {
    let place = columnNumber % 26;
    string = key[place] + string;
    columnNumber =
      place === 0
        ? Math.floor(columnNumber / 26) - 1
        : Math.floor(columnNumber / 26);
  }
  return string;
};

console.log(convertToTitle(columnNumber));
