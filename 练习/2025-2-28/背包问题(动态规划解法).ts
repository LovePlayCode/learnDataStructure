/* 0-1 背包：动态规划 */
function knapsackDP(
    wgt: Array<number>,
    val: Array<number>,
    cap: number
): number {
    const wgtLength = wgt.length
    const valLength = val.length
    // [i,j]表示前 i 个物品可以组成的最大重量 注意和wgt区分
    // 前 i个物品在容量为j的背包中的最大价值
    const dp  = new Array(wgtLength+1).fill(0).map(item=>{
        return new Array(cap+1).fill(0)
    })

    dp[0][0] = 0
    // 遍历第 i 个物品
    for(let i =1; i <= wgtLength; i++){
        for(let j = 1; j <= cap; j++){
            if(wgt[i-1] > j){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-wgt[i-1]]+val[i-1])
            }
        }
    }
    return dp[wgtLength][cap]
}

export {}