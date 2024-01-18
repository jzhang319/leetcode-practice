/*
Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/

var flipAndInvertImage = function (image) {
  // image.map((s) => {
  //   s = s.reverse();
  //   // console.log(reversedArr, ' <-- reversedArr')
  //   for (let i = 0; i < s.length; i++) {
  //     let char = s[i];
  //     if (char === 0) {
  //       s[i] = 1;
  //     } else {
  //       s[i] = 0;
  //     }
  //   }
  //   console.log(s);
  // });
  // return image;

  // version 2
  for (item of image) {
    item = item.reverse();
    for (num in item) {
      item[num] = item[num] === 0 ? 1 : 0;
    }
  }
  return image;
};
/*
time = O(n*m) --> cause it's a 2d array
space = O(1) --> cause we're doing everything in-place
*/
