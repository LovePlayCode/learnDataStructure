function numSquares(n: number): number {
    const dp = new Array(n+1).fill(0)
    for(let i =1; i <=n; i++){
        let minVal = Number.MAX_SAFE_INTEGER
        for(let j = 1; j*j <= i; j++){
            // j 是满足条件的，需要找到i-j^2后的最小值
            minVal = Math.min(minVal,dp[i - j*j])
        }
        // 在原来的方案上+1 即可。
        dp[i] = minVal + 1
    }
    return dp[n]
};

export {}