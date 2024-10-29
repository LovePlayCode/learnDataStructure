/**
 * 
 * 给定n个物品，第 i个物品的重量为 wgt[i-1]、价值为 val[i-1]，和一个容量为 
cap的背包。每个物品只能选择一次，问在限定背包容量下能放入物品的最大价值。
 */
function knapsackDFS(wgt, val, i, c) {
  if (i === 0 || c === 0) {
    return 0;
  }

  if (wgt[i - 1] > c) {
    return knapsackDFS(wgt, val, i - 1, c);
  }
  let no = knapsackDFS(wgt, val, i - 1, c);
  let yes = knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]) + val[i - 1];
  return Math.max(no, yes);
}
let wgt = [10, 20, 30, 40, 50]
let val = [50, 120, 150, 210, 240]
let cap = 50
let n = wgt.length
const res = knapsackDFS(wgt,val,n,cap)
console.log('res==',res)