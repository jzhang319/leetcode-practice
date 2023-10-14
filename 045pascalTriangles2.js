// Example 1:

let rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// let rowIndex = 0
// Output: [1]
// Example 3:

// let rowIndex = 1
// Output: [1,1]

var getRow = function (rowIndex) {
  let cur = [];
  let prev = [1];

  for (let i = 1; i <= rowIndex; i++) {
    cur = [1];

    for (let j = 1; j < i; j++) {
      cur.push(prev[j] + prev[j - 1]);
    }
    cur.push(1);

    prev = cur;
  }

  return prev;
};

console.log(getRow(rowIndex));
