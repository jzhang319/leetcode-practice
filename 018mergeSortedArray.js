let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
// Output: [1, 2, 2, 3, 5, 6];

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = nums1.length - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal >= sVal) {
      nums1[i] = fVal;
      i--;
      first--;
    } else {
      nums1[i] = sVal;
      i--;
      second--;
    }
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
