let nums = [1, 2, 3, 4];

const productExceptSelf = function (nums) {
  const left = new Array(nums.length).fill(0);
  left[0] = 1;

  const right = new Array(nums.length).fill(0);
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }
  return nums;
};

console.log(productExceptSelf(nums))
