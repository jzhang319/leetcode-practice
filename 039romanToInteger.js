// Example 1:
// let s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// let s = "LVIII";
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
let s = "MCMXCIV";
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// let s = "XIV";

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// improve performance
var romanToInt = function (s) {
  const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  let sum = 0;
  s.split('').forEach((num, i)=>{
    if(map[num] < map[s[i + 1]]){
      sum -= map[num];
    } else {
      sum += map[num];
    }
  })
  return sum;
}

// first try
var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = s[i],
      next = s[i + 1];
    // console.log(curr);
    if (curr == "I" && next == "V") {
      sum += 4;
      console.log(sum, " <-- line 39");
      i++;
    } else if (curr == "I" && next == "X") {
      sum += 9;
      console.log(sum, " <-- line 40");
      i++;
    } else if (curr == "I") {
      sum += 1;
      console.log(sum, " <-- line 45");
    }
    if (curr == "V") {
      sum += 5;
      console.log(sum, " <-- line 49");
    }
    if (curr == "X" && next == "L") {
      sum += 40;
      console.log(sum, " <-- line 55");
      i++;
    } else if (curr == "X" && next == "C") {
      sum += 90;
      console.log(sum, " <-- line 59");
      i++;
    } else if (curr == "X") {
      sum += 10;
      console.log(sum, " <-- line 63");
    }
    if (curr == "L") {
      sum += 50;
      console.log(sum, " <-- line 67");
    }
    if (curr == "C" && next == "D") {
      sum += 400;
      console.log(sum, " <-- line 71");
      i++
    } else if (curr == "C" && next == "M") {
      sum += 900;
      console.log(sum, " <-- line 75");
      i++
    } else if (curr == "C") {
      sum += 100;
      console.log(sum, " <-- line 79");
    }
    if (curr == "D") {
      sum += 500;
      console.log(sum, " <-- line 83");
    }
    if (curr == "M") {
      sum += 1000;
      console.log(sum, " <-- line 87");
    }
  }
  return sum;
};

console.log(romanToInt(s));
