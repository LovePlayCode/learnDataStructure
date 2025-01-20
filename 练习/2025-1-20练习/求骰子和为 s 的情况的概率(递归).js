function main(n) {
  const total = 6 ** n;
  for (let sum = n; sum <= 6 * n; sum++) {
    // 获取和为 s 出现的全部次数
    let ways = countWays(n, sum);
    // 计算可能性
    let probability = ways / total;
    // 打印
    console.log(`Sum: ${sum}, Probability: ${probability}`);
  }
}
function countWays(n, sum) {
  if (sum < n || sum > 6 * n) {
    return 0;
  }
  if (n === 0) {
    return sum === 0 ? 1 : 0;
  }

  let ways = 0;
  for (let i = 1; i <= 6; i++) {
    ways += countWays(n - 1, sum - i);
  }
  return ways;
}
main(2);
