var characterReplacement = function (s, k) {
  let windowStart = 0;
  let maxLength = 0;
  let mostCommon = 0;
  let hash = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    if (!hash[s[windowEnd]]) {
      hash[s[windowEnd]] = 0;
    }
    hash[s[windowEnd]]++;

    mostCommon = Math.max(mostCommon, hash[s[windowEnd]]);

    // temp length = windowEnd - windowStart + 1

    if (windowEnd - windowStart + 1 - mostCommon > k) {
      // condition where the window is no longer valid
      hash[s[windowStart]]--;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};
