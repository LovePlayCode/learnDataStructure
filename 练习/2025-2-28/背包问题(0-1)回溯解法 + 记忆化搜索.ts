/* 0-1 背包：暴力搜索 */
function knapsackDFS(
    wgt: Array<number>,
    val: Array<number>,
    i: number,
    c: number
): number {
    // 若已选完所有物品或背包无剩余容量，则返回价值 0
    if (i === 0 || c === 0) {
        return 0;
    }
    // 若超过背包容量，则只能选择不放入背包
    if (wgt[i - 1] > c) {
        return knapsackDFS(wgt, val, i - 1, c);
    }
    // 计算不放入和放入物品 i 的最大价值 决策完 i 轮，剩下的是 i-1 轮的决策
    const no = knapsackDFS(wgt, val, i - 1, c);
    const yes = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];
    // 返回两种方案中价值更大的那一个
    return Math.max(no, yes);
}
export {}