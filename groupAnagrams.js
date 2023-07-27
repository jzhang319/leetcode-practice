// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

let strings = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strings) {
  const hash = {};
  for (let i = 0; i < strings.length; i++) {
    // console.log(strings[i]);
    let currWord = strings[i].split(",")

    for (let j = 0; j < currWord.length; j++) {
      let currChar = currWord[j];
      if (hash[currChar]){
        hash[currChar] += 1;
      } else {
        hash[currChar] = 1;
      }
      console.log(hash);
    }
  }
};

groupAnagrams(strings);
