function numWaysToTile(n) {
  // 边界情况
  if (n === 0) return 1;
  if (n === 1) return 1;

  // 初始化 dp 数组，dp[i] 表示填充一个 2 x i 的矩形的方法数
  let dp = new Array(n + 1);
  dp[0] = 1; // 0x2矩形的填充方法数是1种
  dp[1] = 1; // 1x2矩形的填充方法数是1种

  // 递推计算
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// 测试
console.log(numWaysToTile(8)); // 输出：34
