let nums = [-1, 0, 1, 2, -1, -4];
// output: [[-1,-1,2], [-1,0,1]]

var threeSum = function (nums) {
  if (nums.length < 3 || nums === null) return [];

  let sorted = nums.sort((a, b) => a - b);
  // console.log(sorted);

  let hash = {};

  for (let i = 0; i < nums.length - 2; i++) {
    // let l = i + 1;
    // let r = nums.length - 1;
    // console.log(sorted[i], sorted[i + 1], sorted[i + 2]);
    if (sorted[i] + sorted[i + 1] + sorted[i + 2] === 0) {
      hash[[sorted[i], sorted[i + 1], sorted[i + 2]]];
    }
  }
  console.log(hash);
};

console.log(threeSum(nums));
