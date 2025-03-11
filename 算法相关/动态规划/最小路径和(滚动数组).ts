
/**
 * https://leetcode.cn/problems/minimum-path-sum/
 */
function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(n).fill(0)
    dp[0] = grid[0][0]
    // 初始化首行
    for(let j = 1; j < n; j++){
        dp[j] = dp[j-1] + grid[0][j] 
    }
    for(let i = 1; i < m; i++){
        for(let j = 0; j < n; j++){
            if(j === 0){
                dp[j] = dp[j] + grid[i][j]
            }else{
                // 依旧是由左和上转移。
                dp[j] = Math.min(dp[j-1],dp[j]) + grid[i][j]
            }

        }
    }
    return dp[n-1]

};
export {}