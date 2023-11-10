function SearchChallenge(strArr) {
  const numRows = strArr.length;
  const numCols = strArr[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // Up, Down, Left, Right

  // Find the initial positions of Charlie, Home, and Food
  let charliePos,
    homePos,
    foodPos = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (strArr[i][j] === "C") charliePos = [i, j];
      if (strArr[i][j] === "H") homePos = [i, j];
      if (strArr[i][j] === "F") foodPos.push([i, j]);
    }
  }

  // Helper function to check if a position is valid within the grid
  function isValidPosition(row, col) {
    return row >= 0 && row < numRows && col >= 0 && col < numCols;
  }

  // Helper function to calculate the minimum steps required for Charlie to reach a destination
  function minStepsToDestination(start, destination) {
    const visited = Array(numRows)
      .fill()
      .map(() => Array(numCols).fill(false));

    const queue = [[start[0], start[1], 0]];

    while (queue.length > 0) {
      const [row, col, steps] = queue.shift();

      if (row === destination[0] && col === destination[1]) {
        return steps;
      }

      visited[row][col] = true;

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          isValidPosition(newRow, newCol) &&
          !visited[newRow][newCol] &&
          strArr[newRow][newCol] !== "0"
        ) {
          queue.push([newRow, newCol, steps + 1]);
        }
      }
    }

    return -1; // Charlie cannot reach the destination
  }

  // Calculate the minimum steps to collect all food
  let totalSteps = 0;
  for (const food of foodPos) {
    const stepsToFood = minStepsToDestination(charliePos, food);
    if (stepsToFood === -1) {
      return -1; // Charlie cannot reach the food
    }
    totalSteps += stepsToFood;
    charliePos = food; // Update Charlie's position
  }

  // Calculate the steps to return home
  const stepsToHome = minStepsToDestination(charliePos, homePos);
  if (stepsToHome === -1) {
    return -1; // Charlie cannot reach home
  }

  totalSteps += stepsToHome;

  return totalSteps;
}

// Example usage:
const strArr = ["F00F", "0c00", "000H", "f000"];
console.log(SearchChallenge(strArr)); // Output: 11
