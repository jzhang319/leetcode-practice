var mergeNodes = function (head) {
  let right = head;
  let dummyHead = new ListNode(null);
  let tail = dummyHead;
  let total = 0;

  while (right !== null) {
    if (right.val === 0) {
      if (total > 0) {
        // create new node and link it to the previous node
        tail.next = new ListNode(total);
        // move the tail pointer to the new node
        tail = tail.next;
        total = 0;
      }
    } else {
      total += right.val;
    }
    right = right.next;
  }

  return dummyHead.next;
};
