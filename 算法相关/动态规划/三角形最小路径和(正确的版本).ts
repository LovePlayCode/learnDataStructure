/**
 * 
 * @param triangle 
 * leetcode: https://leetcode.cn/problems/triangle/
 * // 如果要解决一件事情，先用 95% 的时间想明白怎么解决，然后用剩下 5% 的时间解决。
 */
function minimumTotal(triangle: number[][]): number {
    const rowLen = triangle.length
    const colLen = triangle[rowLen - 1].length
    // dp[i][j] 表示从顶点到i,j最小路径和
    const dp = new Array(rowLen).fill(0).map(item => {
        return new Array(colLen)
    })
    dp[0][0] = triangle[0][0]
    for (let i = 1; i < rowLen; i++) {
        // 如果位于最左侧，只能从i-1，0转移过来
        dp[i][0] = dp[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
        }
        // 如果位于 i 行的最右侧，只能从i-1,i-1 转移过来
        dp[i][i] = dp[i - 1][i - 1] + triangle[i][i]
    }
    let minTotal = dp[rowLen - 1][0];
    for (let i = 1; i < rowLen; ++i) {
        minTotal = Math.min(minTotal, dp[rowLen - 1][i]);
    }
    return minTotal;
};



export { }