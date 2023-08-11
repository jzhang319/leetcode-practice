const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

var trap = function (height) {
  // edge case: empty array
  if (!height.length) return 0;

  // initialize variables: sum, wallHeight, maxHeight, heightIndex
  let sum = 0;
  let wallHeight = 0;
  let maxHeight = height[0];
  let heightIndex = 0;

  // find the index of the highest height in array
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      heightIndex = i;
    }
  }

  // loop array for highest index
  // if current height is taller than wallHeight, wallHeight = current height
  // at each index, find the difference between the current height and the wallHeight
  for (let i = 0; i <= heightIndex; i++) {
    if (height[i] > wallHeight) {
      wallHeight = height[i];
    } else {
      sum += wallHeight - height[i];
    }
  }

  // reset wallHeight to 0
  // loop array again from the back to the highest index

  wallHeight = 0;

  for (let i = height.length - 1; i >= heightIndex; i--) {
    if (height[i] > wallHeight) {
      wallHeight = height[i];
    } else {
      sum += wallHeight - height[i];
    }
  }

  return sum;
};

console.log(trap(height));
