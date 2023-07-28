nums = [1, 2, 3, 1];

const containsDuplicate = function (nums) {
  // console.log(nums);
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (!hash.has(currNum)) {
      // console.log(currNum);
      hash.set(currNum);
    } else {
      return true;
    }
  }
  return false;
};

// console.log(containsDuplicate(nums));
