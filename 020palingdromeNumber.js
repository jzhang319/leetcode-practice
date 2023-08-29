let x = 121;
// output: true

// let x = -121
// output: false
// let x = 10
// output: false

var isPalindrome = function (x) {
  let reversed = x.toString().split("").reverse().join("");
  return x.toString() === reversed;
};

console.log(isPalindrome(x));
