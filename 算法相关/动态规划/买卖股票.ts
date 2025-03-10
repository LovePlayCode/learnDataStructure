function maxProfit(prices: number[]): number {
    const len = prices.length
    /**
     * 
     *  dp[i][j]：下标为 i 这一天结束的时候，手上持股状态为 j 时，我们持有的现金数。换种说法：dp[i][j] 表示天数 [0, i] 区间里，下标 i 这一天状态为 j 的时候能够获得的最大利润。其中：

        作者：liweiwei1419
        链接：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/38477/bao-li-mei-ju-dong-tai-gui-hua-chai-fen-si-xiang-b/
        来源：力扣（LeetCode）
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
     */
    const dp = new Array(len).fill(0).map(item=>{
        return new Array(2).fill(0)
    })
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for(let i = 1; i < len; i++){
        // 今天不持股，那么状态由昨天不持股，以及昨天持股，今天卖了转移而来
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i])
        // 今天持股,昨天也持股，相当于什么都没做。 昨天没持股，今天买入，最大值就是负数
        dp[i][1] = Math.max(dp[i-1][1],-prices[i])
    }
    return dp[len-1][0]
};

export {}