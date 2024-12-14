/**
 *
 * @param {number[]} weight
 * @param {number} n
 * @param {number} w
 */
function knapsacka(weight, n, w, values) {
  const dp = new Array(n).fill(0).map((item) => {
    return new Array(w + 1).fill(0);
  });
  dp[0][0] = 0;
  if (weight[0] <= w) {
    dp[0][weight[0]] = values[0];
  }
  for (let i = 1; i < n; i++) {
    // 不把物品放入背包
    for (let j = 0; j <= w; j++) {
      // 这种情况下只能不放
      if (j > w - weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 这里有两种情况
        // 情况 1: 有可能放的物品总价值没有原来物品价值高
        // 情况 2: 放的物品价值比原来物品价值高
        const p = dp[i - 1][j] + values[i];
        dp[i][j + weight[i]] = Math.max(p, dp[i][j + weight[i]]);
      }
    }
  }

  return dp.pop().pop();
}
