// Example 1:
let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let head = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next;
    } else {
      dummy.next = list2;
      list2 = list2.next;
    }
    dummy = dummy.next;
  }
  if (list1 !== null) {
    dummy.next = list1;
  } else {
    dummy.next = list2;
  }
  return head.next;
};

(mergeTwoLists(list1, list2));
