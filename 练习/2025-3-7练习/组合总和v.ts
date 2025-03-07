function combinationSum4(nums: number[], target: number): number {
    // dp[i] 表示选取元素之和构成target 的方案数
    const dp = new Array(target+1).fill(0)
    // 代表不选取任何元素，方案数为 1
    dp[0] = 1
    for(let i = 1; i <= target; i++ ){
        for(const num of nums){
            if(num <= i){
                // 累加全部的结果
                dp[i] += dp[i - num]
            }
        }
    }
    return dp[target]
};

export {}