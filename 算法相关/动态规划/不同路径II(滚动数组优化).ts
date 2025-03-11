
/**
 *  当我们定义的状态在动态规划的转移方程中只和某几个状态相关的时候，就可以考虑这种优化方法，目的是给空间复杂度「降维」。如果你还不知道什么是「滚动数组思想」，一定要查阅相关资料进行学习哦。
    作者：力扣官方题解
    链接：https://leetcode.cn/problems/unique-paths-ii/solutions/316968/bu-tong-lu-jing-ii-by-leetcode-solution-2/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length
    // 使用滚动数组进行优化,因为当前状态只与i-1,j 和i,j-1相关，所以可以用滚动数组的方式优化空间
    const dp = new Array(n).fill(0)
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0
            } else if (j > 0 && obstacleGrid[i][j - 1] === 0) {
                dp[j] += dp[j - 1]
            }
        }
    }
    return dp[n - 1]
};
export { }