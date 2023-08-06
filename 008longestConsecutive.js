var longestConsecutive = function (nums) {
  // edge cases --> if nums is null or empty
  if (nums === null || nums.length === 0) {
    return 0;
  }

  // make a new set with nums array and set current max to 0
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
};
