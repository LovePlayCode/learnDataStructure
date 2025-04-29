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

function findMaxForm(strs: string[], m: number, n: number): number {
  // 设 dp[i][j]表示当前位置的数组构成的i,j所需要的最长长度的子集
  const dp = new Array(m + 1).fill(0).map((item) => {
    return new Array(n + 1).fill(0);
  });
  for (const char of strs) {
    const charArr = findOneAndzero(char);
    // 从后往前填充元素，避免出现元素覆盖的情况
    for (let j = m; j >= charArr[0]; j--) {
      for (let k = n; k >= charArr[1]; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - charArr[0]][k - charArr[1]] + 1);
      }
    }
  }
  return dp[m][n];
}
export {};
