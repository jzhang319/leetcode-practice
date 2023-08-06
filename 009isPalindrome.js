var isPalindrome = function (s) {
  // 1) clean string , replace all non-alphanumeric characters with empty string
  // 2) lowercase the string
  // 3) check

  const check = (s) => {
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
      if (s[l] === s[r]) {
        l++;
        r--;
      } else {
        return false;
      }
    }
    return true;
  };

  const regex = /[^a-zA-Z0-9]/g;
  const clean = s.replace(regex, "").toLowerCase();
  // console.log(clean);
  return check(clean);
};
