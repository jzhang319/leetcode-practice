// Example 1:

// let nums = [2,2,1]
// Output: 1
// Example 2:

let nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// let nums = [1]
// Output: 1

var singleNumber = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  // console.log(map)
  for (let i = 0; i < nums.length; i++) {
    if(map.get(nums[i]) === 1) {
      return nums[i];
    }
  }
};

console.log(singleNumber(nums));
