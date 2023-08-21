let s = "()[]{}";

var isValid = function (s) {
  // check if the string is empty
  if (s.length === 0) {
    return false;
  }
  // split the string
  let splitArr = s.split("");

  // check if each set of parenthesis is followed by a paired parenthesis
  for (let i = 0; i < splitArr.length - 1; i++) {
    let curr = splitArr[i];
    console.log(curr);
    // if (splitArr[i] = '(')
  }
  return false
};

console.log(isValid(s));
