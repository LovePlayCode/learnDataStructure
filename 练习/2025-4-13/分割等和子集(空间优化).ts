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
  // 测试提交
  // 获取中间值
  const midVal = (sum >> 1) + 1;

  // 判断这个值是奇数还是偶数. 如果是奇数，直接返回 false.
  // 这里有个结论: 如果要将数组分割成两个子集。那么这个数组的和必须为偶数。 这是一个必要条件，但不是充分必要条件。
  if ((sum & 1) === 1) {
    return false;
  }

  // dp[i] 表示能否凑成和为 i 的子集。
  const dp = new Array(midVal).fill(false);
  dp[0] = true;
  for (let i = 1; i < len; i++) {
    for (let j = midVal; nums[i] <= j; j--) {
      if (nums[i] === j) {
        dp[j] = true;
        continue;
      }
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[midVal - 1];
}

export {};
