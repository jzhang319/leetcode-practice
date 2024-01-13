/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

var countConsistentStrings = function (allowed, words) {
    let unique = new Set(allowed);
    let count = 0;
    for (let word of words) {
      char = word.split("");
      if (char.every((c) => unique.has(c))) {
        count++;
      }
    }
    return count;
};
