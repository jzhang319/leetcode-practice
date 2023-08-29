

var lengthOfLongestSubstring = function (s) {
  let map = {};
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let lastChar = s[i];
    if (map[lastChar] === undefined) {
      map[lastChar] = 0;
    }
    map[lastChar]++;
    while (map[lastChar] > 1) {
      let firstChar = s[start];
      map[firstChar]--;
      start += 1;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};
