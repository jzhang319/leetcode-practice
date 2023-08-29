let x = 121;
// output: true

// x = -121
// output: false
// x = 10
// output: false

var isPalindrome = function(x) {
    for (let i = 0; i < x.length; i++){
      let curr = x[i];
      let next = x[x.length - 1];
      if (curr!== x[next]){
        return false;
      }
    }
};
