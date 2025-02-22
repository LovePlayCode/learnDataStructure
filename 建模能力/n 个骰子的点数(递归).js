function countWays(n, sum) {
  // 递归终止条件
  if (sum < n || sum > 6 * n) {
    return 0; // 不可能的情况
  }

  // 基本情况：投掷 0 个骰子，点数和为 0 时，只有 1 种方式
  if (n === 0) {
    return sum === 0 ? 1 : 0;
  }

  // 递归计算：通过考虑每个骰子可能的点数 (1 到 6)，累加结果
  let ways = 0;
  for (let i = 1; i <= 6; i++) {
    ways += countWays(n - 1, sum - i); // 递归：考虑当前骰子点数为 i，剩下 n-1 个骰子的点数和为 sum-i
  }

  return ways;
}

function printDiceProbabilities(n) {
  let totalWays = Math.pow(6, n); // 总的投掷方式数

  // 输出每个可能点数和的概率
  for (let sum = n; sum <= 6 * n; sum++) {
    let ways = countWays(n, sum); // 计算投掷 n 个骰子，点数和为 sum 的方式数
    let probability = ways / totalWays; // 计算概率
    console.log(`Sum: ${sum}, Probability: ${probability}`);
  }
}

// 测试
printDiceProbabilities(2); // 投掷 2 个骰子的概率分布
