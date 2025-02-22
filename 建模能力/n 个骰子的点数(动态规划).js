function printDiceProbabilities(n) {
  const dp = new Array(n + 1).fill(0).map((item) => {
    const arr = new Array(6 * n + 1).fill(0);
    return arr;
  });
  // 投掷 i 个骰子，和为 j 出现的次数
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= 6 * n; j++) {
      for (let num = 1; num <= 6; num++) {
        if (j - num >= 0) {
          dp[i][j] += dp[i - 1][j - num];
        }
      }
    }
  }

  // 总投掷方式数
  const totalWays = 6 ** n;
  for (let sum = n; sum <= 6 * n; sum++) {
    let ways = dp[n][sum];
    let probability = ways / totalWays;
    console.log(`Sum: ${sum}, Probability: ${probability}`);
  }
  console.log(dp);
}

printDiceProbabilities(2);
