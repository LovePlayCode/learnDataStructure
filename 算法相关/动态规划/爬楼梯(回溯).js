/**
 * 
 * 给定一个共有n 
 阶的楼梯，你每步可以上 
 1阶或者2 
 阶，请问有多少种方案可以爬到楼顶
 */
// n用来表示楼梯数

/**
 *
 * @param {number[]} state
 * @param {number} n
 * @param {number[][]} res
 * @param {number[]} choices
 */
function backtrack(state, n, res, choices, selected) {
  if (state === n) {
    res.push(state);
    return;
  }
  for (let [index, choice] of choices.entries()) {
    if (state + choice <= n) {
      backtrack(state + choice, n, res, choices, selected);
    }
  }
}
function main(n) {
  const state = 0;
  const res = [];

  backtrack(state, n, res, [1, 2], [false, false]);
  return res.length;
}
const res = main(3);
console.log(res);
