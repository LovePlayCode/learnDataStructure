function climbStairs(n: number): number {
    // 定义 dp，dp[i]表示当前楼梯的爬取次数。 当前的状态由i-1 状态和 i-2 状态转换而来。
    const dp = new Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]

};

export {}