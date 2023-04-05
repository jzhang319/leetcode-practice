// let nums = [2, 7, 11, 15];
// let target = 9;

let nums = [3, 2, 4]
let target = 6

const twoSum = function (nums, target) {
  let ansArr = [];
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i] + nums[i - 1]) === target) {
      ansArr.push(i - 1);
      ansArr.push(i);
    }
  }
  return ansArr;
};


console.log(twoSum(nums, target));
