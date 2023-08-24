let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
// Output: [1, 2, 2, 3, 5, 6];

var merge = function (nums1, m, nums2, n) {
  let ans = [];
  let sliced1 = nums1.slice(0, m);
  let sliced2 = nums2.slice(0, n);
  console.log(sliced1, sliced2);
  ans = sliced1.concat(sliced2).sort();

  return ans;
};

console.log(merge(nums1, m, nums2, n));
