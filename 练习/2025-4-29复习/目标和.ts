function findTargetSumWays(nums: number[], target: number): number {
  // 向数组中每个整数前添加 '+' / '-' 然后串联所有整数。 这里数组每一项都需要添加。
  // 先设所有正数(就是前面+的数)相加和为m, 那么负数部分就是 sum - m 需要的是 m + -(sum - m) = target  = m - sum + m = target = 2m = target+sum m = target + sum / 2
  // 假设我们需要填充 m 即可
  // 同: target + sum 对 2 取余必须可以除尽。 所以这也是一个边界条件之一
  const sum = nums.reduce((pre, cur) => {
    return pre + cur;
  });
  const m = (sum + target) / 2;

  if (m < 0 || (sum + target) % 2 !== 0) {
    return 0;
  }

  const len = nums.length;
  const dp = new Array(len + 1).fill(0).map((item) => {
    return new Array(m + 1).fill(0);
  });

  // 当没有任何元素可以选取时，想要构成 j=0. 只有一种方案
  dp[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    const num = nums[i - 1];
    for (let k = 0; k <= m; k++) {
      dp[i][k] = dp[i - 1][k];
      // 说明可以选,需要把选的方案 和不选的方案相加
      if (k >= num) {
        dp[i][k] += dp[i - 1][k - num];
      }
    }
  }
  return dp[len][m];
}

export {};
