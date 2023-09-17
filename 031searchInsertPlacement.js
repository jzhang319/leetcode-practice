// Example 1:

// let nums = [1, 3, 5, 6],
//   target = 5;
// Output: 2

// Example 2:

let nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// let nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle = Math.trunc((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(searchInsert(nums, target));
