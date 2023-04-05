// let s = "anagram";
// let t = "nagaram";

let s = "anagtam";
let t = "nbgbram";

var isAnagram = function (s, t) {
  const hash = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    // console.log(currChar);
    // console.log(hash, ' <------')
    if (hash[currChar]) {
      hash[currChar] += 1;
    } else {
      hash[currChar] = 1;
    }
  }
  console.log(hash);

  const hash1 = {};
  for (let i = 0; i < t.length; i++) {
    let currChar = t[i];
    if (hash1[currChar]) {
      hash1[currChar] += 1;
    } else {
      hash1[currChar] = 1;
    }
  }
  console.log(hash1);

  let answer = false;
  for (let key in hash) {
    if(hash[key]===undefined || hash1[key]===undefined) return false
    console.log(key, hash[key], hash1[key]);
    if (hash[key] !== hash1[key]) {
      answer = false;
    } else answer = true;
  }
  return answer
};

console.log(isAnagram(s, t));
