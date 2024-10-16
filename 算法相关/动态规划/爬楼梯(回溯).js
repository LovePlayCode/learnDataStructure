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
  const num = state.length
    ? state.reduce((pre, cur) => {
        return pre + cur;
      })
    : -1;

  if (num === n) {
    res.push([...state]);

    return;
  }
  for (let [index, choice] of choices.entries()) {
    if (num < n) {
      state.push(choice);
      selected[index] = true;
      backtrack(state, n, res, choices, selected);
      state.pop();
      selected[index] = false;
    }
  }
}
function main(n) {
  const state = [];
  const res = [];

  backtrack(state, n, res, [1, 2], [false, false]);
  return res;
}
const res = main(3);
console.log(res);
