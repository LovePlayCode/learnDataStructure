function maxProfit(prices: number[]): number {
    const len = prices.length
    
    // 不持股情况，利润为 0
    let cash = 0

    // 持股情况，利润为-
    let hold = -prices[0]
    let preCash = cash
    let preHold = hold
    for(let i = 1; i < len; i++){
        // 今天不持股，状态由昨天不持股，以及昨天持股，今天售卖得到
        cash = Math.max(preCash,preHold+prices[i])
        // 今天持股
        hold = Math.max(preHold,preCash - prices[i])
        preCash = cash
        preHold = hold
    }

    return cash
};
export {}