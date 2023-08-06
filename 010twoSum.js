var twoSum = function (numbers, target) {
  // since array is sorted, we can use 2 pointers from left and right
  // compare the target and the sum, if target is smaller, then we move right pointer down

  let l = 0;
  let r = numbers.length - 1;

  while (l <= r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    }
    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
};
