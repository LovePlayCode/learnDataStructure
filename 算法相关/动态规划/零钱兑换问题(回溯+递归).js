function coinChange(coins, amt) {
  // 初始化缓存
  const memo = {};

  // 定义递归函数
  function findMinCoins(amount, currentIndex) {
    // 检查缓存
    if (memo[amount] !== undefined) return memo[amount];

    // 结束条件
    if (amount === 0) return 0; // 找到解
    if (amount < 0 || currentIndex === coins.length) return Infinity; // 超出范围

    // 选择当前硬币并继续递归
    const include = findMinCoins(amount - coins[currentIndex], currentIndex);

    // 不选当前硬币，选择下一个硬币
    const exclude = findMinCoins(amount, currentIndex + 1);

    // 计算结果并缓存
    memo[amount] = Math.min(include + 1, exclude);

    // 返回最少硬币数
    return memo[amount];
  }

  const result = findMinCoins(amt, 0);

  return result === Infinity ? -1 : result; // 如果结果是 Infinity，说明无法凑出目标金额
}

// 测试用例
console.log("最少硬币数量：", coinChange([1, 2, 5], 11)); // 输出 3
console.log("无法凑出目标金额：", coinChange([2], 3)); // 输出 -1
