var isValidSudoku = function (board) {
  // checking horizontal if there are duplicates
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // checking vertical if there are duplicates
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  // checking sub boards if there are duplicates
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      // sub board or mini boards
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if (cell === ".") continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }

  return true;
};
