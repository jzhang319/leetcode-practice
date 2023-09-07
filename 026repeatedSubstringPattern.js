// Example 1:

// let s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

let s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

var repeatedSubstringPattern = function (s) {
  if (s.length === 0) return false;
  
  let prefix = s[0];
  for (let i = 1; i < s.length; i++) {
    while (s[i].indexOf(prefix)!== 0) {
      prefix = prefix.slice(0, -1)
    }
  }
  return true;
};


console.log(repeatedSubstringPattern(s))
