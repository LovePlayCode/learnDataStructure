/**
 * leetcode: https://leetcode.cn/problems/partition-equal-subset-sum/description/
 * 题解: https://leetcode.cn/problems/partition-equal-subset-sum/solutions/13059/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/
 * @param nums 接收的数组
 */
function canPartition(nums: number[]): boolean {
  const len = nums.length;

  // 得到累加的值
  const sum = nums.reduce((pre, cur) => {
    return pre + cur;
  });

  // 获取中间值
  const midVal = (sum >> 1) + 1;

  // 判断这个值是奇数还是偶数. 如果是奇数，直接返回 false.
  // 这里有个结论: 如果要将数组分割成两个子集。那么这个数组的和必须为偶数。
  if ((sum & 1) === 1) {
    return false;
  }

  // 初始化 DP
  const dp = new Array(len).fill(0).map((item) => {
    return new Array(midVal).fill(false);
  });

  for (let i = 1; i < len; i++) {
    for (let j = 1; j < midVal; j++) {
      // 如果当前的值恰好满足，直接为 true
      if (j === nums[i]) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[len - 1][midVal - 1];
}

export {};
