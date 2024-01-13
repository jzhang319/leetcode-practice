var replaceDigits = function (s) {
  if (s.length === 1) {
    return s;
  }
  character = s.split("");
  // grab ascii value of the letters
  // loop through the string

  for (i = 1; i < s.length; i += 2) {
    let char = s[i - 1].charCodeAt();
    char += Number(s[i]);
    // console.log(String.fromCharCode(char.toString()))
    character[i] = String.fromCharCode(char.toString());
  }

  return character.join("");
};
