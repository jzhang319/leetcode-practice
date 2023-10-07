// Example 1:
let root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

var maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};


console.log(maxDepth(root))
