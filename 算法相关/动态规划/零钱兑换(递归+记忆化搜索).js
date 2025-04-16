function coinChange(coins, amount) {
  // 创建一个记忆化搜索用的数组
  const memo = new Array(amount + 1).fill(-2);
  // 对数组进行排序，以剪枝.
  coins.sort((a, b) => a - b);

  const dfs = (amount) => {
    if (amount === 0) {
      return amount;
    }

    if (memo[amount] !== -2) {
      return memo[amount];
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      // 当前要构成的 amount 不能由coin构成
      if (amount - coin < 0) {
        break;
      }
      let subRes = dfs(amount - coin);

      // 说明当前coin不满足条件,直接continue即可。
      if (subRes === -1) {
        continue;
      }
      res = Math.min(res, subRes + 1);
    }
    return (memo[amount] = res === Number.MAX_SAFE_INTEGER ? -1 : res);
  };

  return dfs(amount);
}
