let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let area = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    const temp = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, temp);
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return area;
};

console.log(maxArea(height));
