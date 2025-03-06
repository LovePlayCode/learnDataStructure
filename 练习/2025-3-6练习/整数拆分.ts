function integerBreak(n: number): number {
    // 定义一个 dp[i] 表示正整数 i 的最大沉积
    // dp[i] = 选和不选的最大值
    
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <= n; i++){
        for(let j = 1; j < i ; j++){
            dp[i] = Math.max(dp[i],j * (i-j),j * dp[i-j])
        }
    }
    return dp[n]
};
export {}