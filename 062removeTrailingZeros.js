var removeTrailingZeros = function (num) {
  numArr = num.split("");
  for (i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i] === "0") {
      numArr.pop();
    } else if (numArr[i - 1] !== 0) {
      return numArr.join("");
    }
  }
};
