// Example 1:

let haystack = "sadbutsad",
  needle = "sad";
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// let haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation:

var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  let i = 0,
    j = 0,
    k = 0;

  while (i < haystack.length) {
    while (needle[j] == haystack[k]) {
      j++;
      k++;
      if (j == needle.length) return i;
      if (k == haystack.length) return -1;
    }
    if (needle[j] != haystack[k]) {
      i++;
      j = 0;
      k = i;
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
