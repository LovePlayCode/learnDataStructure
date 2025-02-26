function fib(n: number): number {
    // dp[i]表示 i 处的斐波那契数
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1
    for(let i =2; i <=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};  


export {}