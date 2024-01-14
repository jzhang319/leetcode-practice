var removeOuterParentheses = function (s) {
    let stack = ''
    let count = 0
    // interate through the string and check for first "("
    // add that to the stack
    // check if the following char is not ")".
    for (i = 0; i < s.length; i++) {
        let char = s[i]

        if (char === '(') {

            if (count > 0) {
                stack += '('

            }
            count++

        } else {
            count--
            if (count > 0) {
                stack += ')'
            }
        }
    }
    return stack
};
