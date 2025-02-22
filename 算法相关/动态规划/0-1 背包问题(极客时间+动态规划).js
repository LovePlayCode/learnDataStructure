/**
 *
 * @param {number[]} weight
 * @param {number} n
 * @param {number} w
 */
function knapsacka(weight, n, w) {
  const dp = new Array(n).fill(false).map((item) => {
    return new Array(w + 1);
  });
  dp[0][0] = true;
  if (weight[0] <= w) {
    dp[0][weight[0]] = true;
  }
  for (let i = 1; i < n; i++) {
    // 不把物品放入背包
    for (let j = 0; j <= w; j++) {
      if (dp[i - 1][j] === true) {
        dp[i][j] = dp[i - 1][j];
      }
    }

    // 把物品放入背包
    for (let j = 0; j <= w - weight[i]; j++) {
      if (dp[i - 1][j]) {
        dp[i][j + weight[i]] = true;
      }
    }
  }

  for (let i = w; i >= 0; i--) {
    if (dp[n - 1][i] === true) {
      return i;
    }
  }
}
