
function uniquePaths(m: number, n: number): number {
    // 设dp[i][j] 为机器人能到i,j 的路径
    // 状态转移:
    //1. 从上面过来
    //2. 从右边过来
    // 取两者的相加值
    const dp = new Array(m).fill(0).map(item=>{
        return new Array(n).fill(0)
    })
    for(let i = 0; i < m; i++){
        dp[i][0] = 1
    }
    for(let j = 0; j < n; j++){
        dp[0][j] = 1
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

export {}