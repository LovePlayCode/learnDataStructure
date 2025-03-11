/**
 * https://leetcode.cn/problems/minimum-path-sum/
 */
function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill(0).map(item=>{
        return new Array(n).fill(0)
    })
    
    // 先进行初始化
    dp[0][0] = grid[0][0]
    // 初始化首列,因为只有一种加法，直接全部累加起来就 OK
    for(let i = 1; i < m; i++){
        dp[i][0] = dp[i-1][0] + grid[i][0]
    }

    // 初始化首行
    for(let j = 1; j < n; j++){
        dp[0][j] = dp[0][j-1] + grid[0][j] 
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            // 当前的最小状态由左边或上边的最小状态转移而来
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }
    return dp[m-1][n-1]
};
export {}