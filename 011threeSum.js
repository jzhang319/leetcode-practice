let nums = [-1, 0, 1, 2, -1, -4];
// output: [[-1,-1,2], [-1,0,1]]

var threeSum = function (nums) {
  if (nums.length < 3 || nums === null) return [];

  nums = nums.sort((a, b) => a - b);
  // console.log(sorted);

  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    // console.log(sorted[i], sorted[i + 1], sorted[i + 2]);
    if (nums[i] + nums[j] + nums[k] === 0) {
      ans.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    
  }
  // console.log(ans);
  return ans;
};

console.log(threeSum(nums));
