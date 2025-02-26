var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  // 定义四个方向：上下左右
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 回溯函数
  const backtrack = (i, j, index) => {
    // 退出条件：如果当前索引已经等于单词的长度，说明所有字母都匹配了
    if (index === word.length) return true;

    // 先保存当前的字符，并标记为已访问
    const temp = board[i][j];
    board[i][j] = "#"; // 标记当前单元格已访问

    // 遍历四个方向
    for (let [dx, dy] of directions) {
      const ni = i + dx;
      const nj = j + dy;

      // 检查新位置是否合法，并且字符匹配
      if (
        ni >= 0 &&
        ni < m &&
        nj >= 0 &&
        nj < n &&
        board[ni][nj] === word[index]
      ) {
        // 继续回溯
        if (backtrack(ni, nj, index + 1)) return true;
      }
    }

    // 恢复当前单元格的状态
    board[i][j] = temp;
    return false;
  };

  // 遍历网格中的每个单元格，尝试从每个单元格开始查找单词
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && backtrack(i, j, 1)) {
        return true;
      }
    }
  }

  return false;
};

// 测试
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // true
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
); // true
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
); // false
