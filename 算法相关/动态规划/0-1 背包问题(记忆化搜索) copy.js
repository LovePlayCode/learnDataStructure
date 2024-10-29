/**
 * 
 * 给定n个物品，第 i个物品的重量为 wgt[i-1]、价值为 val[i-1]，和一个容量为 
cap的背包。每个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
 */
/* 0-1 背包：记忆化搜索 */
function knapsackDFSMem(wgt, val, mem, i, c) {
  // 若已选完所有物品或背包无剩余容量，则返回价值 0
  if (i === 0 || c === 0) {
      return 0;
  }
  // 若已有记录，则直接返回
  if (mem[i][c] !== -1) {
      return mem[i][c];
  }
  // 若超过背包容量，则只能选择不放入背包
  if (wgt[i - 1] > c) {
      return knapsackDFSMem(wgt, val, mem, i - 1, c);
  }
  // 计算不放入和放入物品 i 的最大价值
  const no = knapsackDFSMem(wgt, val, mem, i - 1, c);
  const yes =
      knapsackDFSMem(wgt, val, mem, i - 1, c - wgt[i - 1]) + val[i - 1];
  // 记录并返回两种方案中价值更大的那一个
  mem[i][c] = Math.max(no, yes);
  return mem[i][c];
}