// Example 1:

let numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// let numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];
  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    const curRow = [];

    curRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);

    triangle.push(curRow);
  }
  return triangle;
};

console.log(generate(numRows));
