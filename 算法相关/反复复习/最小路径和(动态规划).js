/**
 * 1. 描述决策: 只能向下或者向右
 * 2. 定义状态: dp[i][j]代表在 i 行和 j 列的最小路径和。
 * 3. 建立dp 表并初始化状态
 * 4. 推导状态转移方程: 当前的最小路径和由左边和上面的最小路径和+grid[i][j]决定 所以状态转移方程为dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
 * 5. 建立边界条件
 */
function minPathSumDFS(grid, i1, j1) {
  const row = grid.length;
  const col = grid[0].length;
  const dp = Array(row)
    .fill(0)
    .map((item) => Array(col).fill(0));
  dp[0][0] = grid[0][0];
  // 填充初始条件
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 填充首行
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[i1][j1];
  // console.log(dp)
}
const minPath = minPathSumDFS(
  [
    [1, 3, 1, 5],
    [2, 2, 4, 2],
    [5, 3, 2, 1],
    [4, 3, 5, 2],
  ],
  4 - 1,
  4 - 1
);
console.log("minPath===", minPath);

// 空间优化版

/**
 *
 * @param {*} grid
 * 1. 由于只跟左边和上面的状态有关，可以使用一个一维数组来解决
 * 2. 首先初始化一行
 *
 */
function minPathSumDPComp(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dp = Array(col).fill(0);
  dp[0] = grid[0][0];
  for (let i = 1; i < col; i++) {
    dp[i] = grid[0][i] + dp[i - 1];
  }
  for (let i = 1; i < row; i++) {
    dp[0] = dp[0] + grid[i][0];
    for (let j = 1; j < col; j++) {
      // 左边行 dp[j-1] 上方的 dp[j]
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
    }
  }
  console.log(dp)
  return dp[col-1];
}

const minPath2 = minPathSumDPComp(
  [
    [1, 3, 1, 5],
    [2, 2, 4, 2],
    [5, 3, 2, 1],
    [4, 3, 5, 2],
  ],
  4 - 1,
  4 - 1
);
console.log("minPath2===", minPath2);
