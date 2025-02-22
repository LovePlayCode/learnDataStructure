/**
 *
 * @param {number[]} nums
 */
function canPartition(nums) {
  // 获取数组长度
  const len = nums.length;
  // 获取总和
  const sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  const mid = sum >> 1;

  // 奇数直接返回 false
  if ((sum & 1) !== 0) {
    return false;
  }

  // 定义一个 dp 数组 dp[i][j] 代表在第 i 个元素可以满足 j 的背包容量
  const dp = new Array(len).fill(false).map((item) => {
    return new Array(mid + 1).fill(false);
  });

  if (nums[0] <= mid) {
    dp[0][nums[0]] = true;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= mid; j++) {
      // 先赋值满足条件的，因为在这次动态规划前，如果有满足条件的，本次条件一定可以满足
      dp[i][j] = dp[i - 1][j];
      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[len - 1][mid];
}

console.log(canPartition([1, 5, 11, 5]));
