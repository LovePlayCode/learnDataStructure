/**
 *
 * @param {number[][]} matrix  r
 * @param {*} n
 */
function minDistBT(matrix, n) {
  // 1. 初始化
  let dp = new Array(n).fill(0).map((x) => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][0] = matrix[i][0] + dp[i][0];
  }

  for (let j = 0; i < n; i++) {
    dp[0][j] = matrix[0][j] + dp[0][j];
  }
  // 2. 填表: row和col都填好了，所以从i=1,j=1开始填起。 棋盘可以选左边或上边

  for (let row = 1; row < n; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] =
        Math.min(matrix[row - 1][col], matrix[row][col - 1]) + matrix[row][col];
    }
  }
  return dp[n - 1][n - 1];
}
