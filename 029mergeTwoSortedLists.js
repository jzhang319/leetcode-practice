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
  if (!list1) return list2;
  if (!list2) return list1;
  let result = [];
  let i = 0,
    j = 0;
  while (i < list1.length || j < list2.length) {
    if (i === list1.length) {
      result.push(list2[j]);
      j++;
    } else if (j === list2.length) {
      result.push(list1[i]);
      i++;
    } else if (list1[i] < list2[j]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }
  return result;
};

console.log(mergeTwoLists(list1, list2));
