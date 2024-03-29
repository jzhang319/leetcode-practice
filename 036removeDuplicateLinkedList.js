// Example 1:
let head = [1, 1, 2];
// Output: [1,2]

//Example 2:
// Input: head = [1, 1, 2, 3, 3];
// Output: [1, 2, 3];
var deleteDuplicates = function (head) {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};

console.log(deleteDuplicates(head));
