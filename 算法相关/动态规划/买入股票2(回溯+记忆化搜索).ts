function maxProfit(prices) {
    const n = prices.length;
    const memo = new Map(); // 缓存已计算的状态

    function dfs(index, hasStock) {
        if (index >= n) return 0;
        const key = `${index},${hasStock}`;
        if (memo.has(key)) return memo.get(key); // 命中缓存直接返回

        // 不进行任何操作，直接进入下一天
        const doNothing = dfs(index + 1, hasStock);

        let action = 0;
        if (hasStock) {
            // 如果持有股票，可以选择卖出
            action = prices[index] + dfs(index + 1, false);
        } else {
            // 如果未持有股票，可以选择买入
            action = -prices[index] + dfs(index + 1, true);
        }

        // 选择操作或不操作中的最大值，并缓存结果
        const result = Math.max(doNothing, action);
        memo.set(key, result);
        return result;
    }

    return dfs(0, false); // 初始状态：未持有股票
}
export {}