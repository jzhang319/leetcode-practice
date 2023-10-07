// Example 1:
let nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:


// Example 2:
// let nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

var sortedArrayToBST = function(nums) {
  let middleNum = Math.floor(nums.length/2)
  if (!nums.length) return null;
  let mid = Math.floor(nums.length/2)
  let root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root;
};

console.log(sortedArrayToBST(nums))
