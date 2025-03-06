function numSquares(n: number): number {
    // dp[i] 表示完全平方数构成 i 所需要的最小值
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for(let i =3; i <=n; i++){
        let res = Number.MAX_SAFE_INTEGER
        for(let j = 1; j*j <=i; j++){
            res = Math.min(res,dp[i-j*j]+1)
        }
        dp[i] = res
    }
    return dp[n]
};

export {}