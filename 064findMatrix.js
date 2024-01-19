// Example 1:

// Input: nums = [1,3,4,1,2,3,1]
// Output: [[1,3,4,2],[1,3],[1]]
// Explanation: We can create a 2D array that contains the following rows:
// - 1,3,4,2
// - 1,3
// - 1
// All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
// It can be shown that we cannot have less than 3 rows in a valid array.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: [[4,3,2,1]]
// Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.

var findMatrix = function (nums) {
  let matrix = [];
  let unique = new Set();

  while (nums.length > 0) {
    let row = [];
    for (let i = 0; i < nums.length; i++) {
      if (!unique.has(nums[i])) {
        unique.add(nums[i]);
        row.push(nums[i]);
        nums.splice(i, 1);
        i--;
      }
    }
    matrix.push(row);
    unique.clear();
  }
  return matrix;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1])); // [[1,3,4,2],[1,3],[1]]
