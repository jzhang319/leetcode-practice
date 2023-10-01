// Example 1:
let root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = [];
// Output: [];

// Example 3:
// Input: root = [1];
// Output: [1];

var inorderTraversal = function (root) {
  // inorder traversal --> left, node, right
  // 1. create result array
  // 2. create traverse function
  // a. if node is null, return
  // b. if node.left exists, call traverse on node.left
  // c. push node.val into result array
  // d. if node.right exists, call traverse on node.right
  // 3. call traverse function
  // 4. return result array

  // time complexity: O(n)
  // space complexity: O(n)

  let result = [];
  const traverse = (node) => {
    if (node === null) return;
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return result;
};

console.log(inorderTraversal(root))
