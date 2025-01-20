function main(n) {
  // 定义一个 dp 数组，用于表示骰子在第 i 个所投出来的个数 j
  const dp = new Array(n + 1).fill(0).map((item) => {
    const arr = new Array(6 * n + 1).fill(0);
    return arr;
  });

  // 第 0,0 的次数为 1
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= 6 * n; j++) {
      for (let k = 1; k <= 6; k++) {
        if (j - k >= 0) {
          dp[i][j] += dp[i - 1][j - k];
        }
      }
    }
  }

  // 计算总可能出现的次数(排列组合)
  const total = 6 ** n;

  for (let sum = n; sum <= 6 * n; sum++) {
    const frequency = dp[n][sum];
    const probability = frequency / total;
    console.log(probability);
  }
}

main(2);
