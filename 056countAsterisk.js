var countAsterisks = function (s) {
    let stack = []
    let count = 0
    for (char of s) {
        if (char === '|') {
            stack.push(char)
        } else {
            if (char === '*' && stack.length % 2 == 0) {
                count++
            }

        }

    }
    return count
};
