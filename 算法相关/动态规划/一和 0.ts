function findMaxForm(strs: string[], m: number, n: number): number {
  const len = strs.length;
  // 设 dp[i][j][k]表示前 i个元素填充 j以及 k 所需要的最大的长度
  const dp = new Array(len + 1).fill(0).map((item) => {
    return new Array(m + 1).fill(0).map((item) => {
      return new Array(n + 1).fill(0);
    });
  });
  const findOneAndzero = (s: string) => {
    const char = [0, 0];
    for (const stiem of s) {
      if (stiem === "0") {
        char[0]++;
      } else {
        char[1]++;
      }
    }
    return char;
  };
  for (let i = 1; i <= len; i++) {
    // 怎么样去寻找0和1
    const charArr = findOneAndzero(strs[i - 1]);
    console.log(charArr);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (charArr[0] > j || charArr[1] > k) {
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = Math.max(
            dp[i - 1][j][k],
            dp[i - 1][j - charArr[0]][k - charArr[1]] + 1
          );
        }
      }
    }
  }
  return dp[len][m][n];
}
export {};
