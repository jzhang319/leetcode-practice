// Example 1:
let root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1, 2, 2, null, 3, null, 3];
// Output: false;

var isSymmetric = function (root) {
  if (root === null) return true;
  return compareLeftRight(root.left, root.right);
};

const compareLeftRight = (left, right) => {
  if (left === null && right === null) return true;
  if (left === null && right !== null) return false;
  if (left !== null && right === null) return false;
  if (left.val!== right.val) return false;
  return compareLeftRight(left.left, right.right) && compareLeftRight(left.right, right.left);
};

console.log(isSymmetric(root))
