var mergeNodes = function (head) {
    let right = head;
    let dummyHead = new ListNode(null);
    let tail = dummyHead;

    // transverse using right
    // start suming up the values when we find the 2nd 0,
    //  then we stop and assign total to the newLL.head.val
    // when we find the next pairs of 0, then we assign to newLL.next.val
    // when we find the 2nd zero we also assign the left pointer to the right pointer
    // return newLL head at the end

    while (right !== null) {
      // finding the first 0
      if (right.val === 0 && right.next !== null) {
        newNode = new ListNode(0);
        tail.next = newNode;
        tail = tail.next;
      }
      newNode.val += right.val; // add rightval into node val
      right = right.next;
    }

    return dummyHead.next;
};
