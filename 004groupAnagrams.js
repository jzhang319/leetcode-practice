// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) {
  let sorted = strs.map((strs) => strs.split("").sort().join(""));
  let hash = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!hash[sorted[i]]) {
      hash[sorted[i]] = [strs[i]];
    } else {
      hash[sorted[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

groupAnagrams(strs);
