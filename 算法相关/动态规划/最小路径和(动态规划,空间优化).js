/**
 * 
 * 
 * 给定一个 n * m 
 的二维网格 grid ，网格中的每个单元格包含一个非负整数，表示该单元格的代价。
 机器人以左上角单元格为起始点，每次只能向下或者向右移动一步，直至到达右下角单元格。请返回从左上角到右下角的最小路径和。
 */

/**
 *
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @param {number[]} state
 * @param {number[]} res
 */
/* 最小路径和：动态规划 */
function minPathSumDP(grid) {
  const n = grid.length;
  const m = grid.length;
  const dp = new Array(m);
  dp[0] = grid[0][0];
  // 填充首行
  for (let j = 1; j < m; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }
  // 填充首列

  for (let i = 1; i < n; i++) {
    // 填充首列
    dp[0] = dp[0] + grid[i][0];
    for (let j = 1; j < m; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
    }
  }
  return dp[m - 1];
}
