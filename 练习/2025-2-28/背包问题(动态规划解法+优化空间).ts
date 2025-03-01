/* 0-1 背包：空间优化后的动态规划 */
function knapsackDPComp(wgt, val, cap) {
    const n = wgt.length;
    // 初始化 dp 表
    const dp = Array(cap + 1).fill(0);
    // 状态转移
    for (let i = 1; i <= n; i++) {
        // 倒序遍历 因为只有一维数组，当前的状态需要根据 i-1的状态获得，如果正序遍历会改变i-1的状态
        for (let c = cap; c >= 1; c--) {
            if (wgt[i - 1] <= c) {
                // 不选和选物品 i 这两种方案的较大值
                dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
            }
        }
        console.log(dp);
    }
    return dp[cap];
}
console.log(knapsackDPComp([0, 1, 2, 3], [0, 5, 11, 15], 4));



export { }