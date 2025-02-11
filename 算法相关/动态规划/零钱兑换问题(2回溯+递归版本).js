function coinChangeWays(coins, amt) {
  // 定义递归函数
  function countWays(amount, startIndex) {
    // 如果金额为 0，表示找到一个有效组合
    if (amount === 0) return 1;
    // 如果金额小于 0，表示当前组合不合法
    if (amount < 0) return 0;

    let result = 0;

    // 从当前硬币开始递归
    for (let i = startIndex; i < coins.length; i++) {
      result += countWays(amount - coins[i], i); // 继续选择当前硬币
    }

    return result;
  }

  // 从第一个硬币开始递归
  return countWays(amt, 0);
}

// 测试用例
console.log(coinChangeWays([1, 2, 3], 5)); // 输出 4
console.log(coinChangeWays([2], 3)); // 输出 0
