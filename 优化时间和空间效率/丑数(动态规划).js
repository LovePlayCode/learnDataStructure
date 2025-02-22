function nthUglyNumberHeap(n) {
  if (n <= 0) {
    throw new Error("n 小于等于 0");
  }
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  // dp[i] 表示 第 i+1 个最小的丑数
  const dp = [1];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    const nextUgly = dp[i];
    // 更新指针
    if (nextUgly === dp[p2] * 2) p2++;
    if (nextUgly === dp[p3] * 3) p3++;
    if (nextUgly === dp[p5] * 5) p5++;
  }

  return dp[n - 1];
}

// 测试
console.log(nthUglyNumberHeap(10)); // 输出 12
