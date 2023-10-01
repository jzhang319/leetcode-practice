// Example1:
let p = [1, 2, 3],
  q = [1, 2, 3];
// Output: true;

// Example2:
// let p = [1, 2], q = [1, null, 2];
// Output: false;

// Example3:
// Input: (p = [1, 2, 1]), (q = [1, 1, 2]);
// Output: false;

// if both p and q are null return true
// if 1 of them is null and the other is not null return false
// return isSameTree(left for both) and isSameTree(right for both)

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (
    (p === null && q !== null) ||
    (p !== null && q === null) ||
    p.val !== q.val
  ) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(p, q));
