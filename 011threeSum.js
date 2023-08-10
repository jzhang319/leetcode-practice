let nums = [-1, 0, 1, 2, -1, -4];
// output: [[-1,-1,2], [-1,0,1]]

var threeSum = function(nums) {
  if (nums.length < 3 || nums === null) return [];

  let sorted = nums.sort((a, b) => a - b);
  // console.log(sorted);
  let l = i + 1;
  let r = nums.length - 1;

  for (let i = 0; i < nums.length - 2; i++) {
    
  }
};


console.log(threeSum(nums))
