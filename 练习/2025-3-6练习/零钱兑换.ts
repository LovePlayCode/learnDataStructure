function coinChange(coins: number[], amount: number): number {
    const clen = coins.length;
    const alen = amount + 1
    // 定义 dp[i][j]表示 0..i 硬币能构成 j 的最少硬币个数
    // dp[i][j] = 不选当前硬币, 选了当前硬币  两者的最小值
    const dp = new Array(clen+1).fill(0).map(item=>{
        return new Array(alen).fill(0)
    })
     for(let i = 0; i<= amount; i++){
        dp[0][i] = amount + 1
    }
    for(let i = 1; i <= clen; i++){
        for(let a = 1; a<= amount; a++){
            // 如果当前金额大于当前 a，不能选择当前金额
            if(coins[i-1] > a){
                dp[i][a] = dp[i-1][a]
            }else{
    
                dp[i][a] = Math.min(dp[i-1][a],dp[i][a-coins[i-1]]+1)
            }
        }
    }
    return dp[clen][amount] !== amount+1 ? dp[clen][amount] : -1
};
export {}