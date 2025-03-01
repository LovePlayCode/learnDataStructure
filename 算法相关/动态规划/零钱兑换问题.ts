function coinChange(coins: number[], amount: number): number {
    const cLen = coins.length
    const amountLen = amount + 1
    const MAX = amount + 1;
    // dp[i][j] 表示前 i 种硬币能凑出 a 的最小数量。 但是由于初始化时 row最大长度为coins.length+1。 再进行状态转移时需要 a - coins[i-1
    const dp = new Array(cLen + 1).fill(0).map(item => {
        return new Array(amountLen).fill(0)
    })
    for (let i = 0; i <= amount; i++) {
        dp[0][i] = MAX
    }
    for (let i = 1; i <= cLen; i++) {
        for (let a = 1; a < amountLen; a++) {
            // 如果前一个硬币已经大于当前总价值 a 了，只能不选择当前硬币。
            if (coins[i - 1] > a) {
                dp[i][a] = dp[i - 1][a]
            } else {
                // 不选 i， 和选 i 的最小值
                //dp[i][a-coins[i-1] 选了当前硬币后，剩余钱的前 i 个硬币所需要的硬币数
                dp[i][a] = Math.min(dp[i - 1][a], dp[i][a - coins[i - 1]] + 1)
            }
        }
    }
    return dp[cLen][amount] !== MAX ? dp[cLen][amount] : -1
};


export { }