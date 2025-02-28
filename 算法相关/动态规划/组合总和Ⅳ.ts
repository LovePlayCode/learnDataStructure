/**
 * leetcode: https://leetcode.cn/problems/combination-sum-iv/
 * 首先这个题并不适合用二维数组 dp 做，原因在于这里是排列，顺序不同，就代表不同的结果。 光这个想了快两个小时，也是绝了。呜呜呜 2025-2-28 14:00-16:27
 */

function combinationSum4(nums: number[], target: number): number {
    // 状态表示 组成 i 的最多结果
    const dp = new Array(target+1).fill(0)
    // 用于进行状态的转移，比如有[7] 而恰好target 是 7 那么 dp[7-7] = 1 没问题
    dp[0] = 1
    for(let i = 1; i <= target; i++){
        for(const num of nums){
            if(num <= i){
                dp[i] += dp[i - num]
            }
        }
    }
    return dp[target]
};

export {}