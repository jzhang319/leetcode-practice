// Example 1:

let numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// let numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  let pascalsTriangle = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length; j++) {
      let rowAbove = pascalsTriangle[i - 1];
      row[j] = rowAbove[j - 1] + rowAbove[j];
    }
    pascalsTriangle[i] = row;
  }
  return pascalsTriangle;
};

console.log(generate(numRows));
