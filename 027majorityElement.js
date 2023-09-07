// Example 1:

let nums = [3, 2, 3];
// Output: 3

// Example 2:

// let nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key;
    }
  }
  return map;
};

console.log(majorityElement(nums));
