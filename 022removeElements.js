let nums = [3, 2, 2, 3];
let val = 3;
// Output: 2, (nums = [2, 2, _, _]);

var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // console.log(nums[i]);
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeElement(nums, val));
