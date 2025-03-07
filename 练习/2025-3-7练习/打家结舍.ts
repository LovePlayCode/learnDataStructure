function rob(nums: number[]): number {

    const len = nums.length
    if (len === 1) {
        return nums[0]
    }
    if (len === 2) {
        return Math.max(nums[len - 1], nums[len - 2])
    }
    // 定义 dp[i] 表示前 i 间房屋能偷窃到的最高总金额
    // 状态转移方程为: dp[i] = max(dp[i-2]+nums[i],dp[i-1])
    const dp = new Array(len).fill(0)
    // 如果只有一间房，那么价值为nums[0]
    // 如果有两间房，那么价值选两者中最大的
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    return dp[len - 1]
};

export { }