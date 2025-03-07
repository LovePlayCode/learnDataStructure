/**
 * 
 * @param triangle 
 * @returns 
 * 这个版本的动态规划是有问题的，但是我觉得思路是打开的，有一个很好的思路，但是代码不能跑。请移步其他代码。
 * 2025-3-7周五
 * 自己写的思路，写这种类型的题终于有思路了。
 */

function minimumTotal(triangle: number[][]): number {
    // di[i] 表示当前行的最小路径
    // 状态转移 如果上一个选了 j，那么当前只能选择 j 或 j+1 选择最小的即可
    const len = triangle.length
    const dp = new Array(len)
    dp[0] = triangle[0][0]
    let prev = 0
    if(triangle[1][0] < triangle[1][1]){
        prev = 0
    }else{
        prev = 1
    }
    dp[1] = dp[0] + Math.min(triangle[1][0],triangle[1][1])
    for(let i = 2; i < len; i++){
        if(prev +1 >= len){
            dp[i] = triangle[i][prev] + dp[i-1] 
            continue
        }
        if(triangle[i][prev] > triangle[i][prev+1]){
            prev = prev+1
        }
        dp[i] = triangle[i][prev] + dp[i-1]
    }
    return dp[len-1]
};


export {}