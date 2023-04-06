// let nums = [2, 7, 11, 15];
// let target = 9;

let nums = [3, 2, 4];
let target = 6;

const twoSum = function (nums, target) {
  let ansArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ansArr.push(i, j);
      }
    }
  }
  return ansArr;
};

console.log(twoSum(nums, target));
