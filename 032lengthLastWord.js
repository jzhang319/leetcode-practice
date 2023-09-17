// Example 1:

let s = "Hello World   "
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// let s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// let s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

var lengthOfLastWord = function(s) {
  let reversed = s.split(" ").reverse()
  console.log(reversed);
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i].length > 0) {
      return reversed[i].length
    }
  }
};

console.log(lengthOfLastWord(s))
