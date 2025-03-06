function coinChange(coins: number[], amount: number): number {
    const memo = {}

    // 用于求remaining的最小值
    const dfs = (remaining)=>{
        if(remaining < 0){
            return -1
        }
        if(remaining === 0){
            return 0
        }
        if(memo[remaining]!== undefined){
            return memo[remaining]
        }
        let minCoins = Infinity
        for(const coin of coins){
            const result = dfs(remaining - coin)
            if (result >= 0 && result < minCoins) {
                minCoins = result + 1;
            }
        }
        memo[remaining] = minCoins
        return minCoins === Infinity ? -1 : minCoins;
    }
    return dfs(amount)
}


export {}