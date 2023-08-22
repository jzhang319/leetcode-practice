let s = "()[]{}";

var isValid = function (s) {
  // check if the string is empty
  if (s.length === 0) {
    return false;
  }

  const stack = [];
  const parens = "()[]{}";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potParens = open + closed;

    if (parens.includes(potParens)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid(s));
