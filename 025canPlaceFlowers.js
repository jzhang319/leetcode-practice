// let flowerbed = [1, 0],n = 1;
// Output: false

let flowerbed = [1, 0, 0, 0, 1],
  n = 2;
// output: false

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  if (n === 2 && flowerbed.length <= 2) return false;
  if (flowerbed.length < 2 && flowerbed[0] === 0) return true;
  if (n === 0) return true;
  if (flowerbed.length <= 2) {
    if (flowerbed[0] || flowerbed[1]) return false;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    let currPos = flowerbed[i];
    let nextPos = flowerbed[i + 1];
    let prevPos = flowerbed[i - 1];

    console.log(prevPos, currPos, nextPos);
    if (prevPos === 0 && nextPos === 0 && currPos === 0) {
      count++;
      i++;
    } else if (prevPos === undefined && currPos === 0 && nextPos === 0) {
      count++;
      i++
    } else if (nextPos === undefined && currPos === 0 && prevPos === 0) {
      count++;
    }
  }
  if (count >= n) {
    console.log(count, n);
    return true;
  } else return false;
};

console.log(canPlaceFlowers(flowerbed, n));
