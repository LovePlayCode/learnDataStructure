/**
 *
 * @param {number} row
 * @param {*} n
 * @param {number[][]} state
 * @param {*} res
 * @param {*} cols
 * @param {*} diags1
 * @param {*} diags2
 */
function backtrack(row, n, state, res, cols, diags1, diags2) {
  if (row === n) {
    res.push(state.map((item) => item.slice()));
    return;
  }
  for (let col = 0; col < n; col++) {
    const diag1 = row - col + n - 1;
    const diag2 = row + col;
    // 剪枝：不允许该格子所在列、主对角线、次对角线上存在皇后
    if (!cols[col] && !diags1[diag1] && !diags2[diag2]) {
      state[row][col] = "Q";
      diags1[diag1] = true;
      diags2[diag2] = true;
      cols[col] = true;
      // 放置下一行
      backtrack(row + 1, n, state, res, cols, diags1, diags2);
      // 回退：将该格子恢复为空位
      state[row][col] = "#";
      cols[col] = diags1[diag1] = diags2[diag2] = false;
    }
  }
}

function nQueens(n) {
  const state = Array.from({ length: n }, () => Array(n).fill("#"));

  // cols 记录是否有皇后，
  const cols = Array(n).fill(false);
  // 记录主对角线是否有皇后 大小为 -(n-1) 到 n-1 总共是 2*n-1个元素，相当于数几条线
  const diags1 = Array(2 * n - 1).fill(false);

  // 记录次对角线是否有皇后
  const diags2 = Array(2 * n - 1).fill(false);
  const res = [];

  backtrack(0, n, state, res, cols, diags1, diags2);
  return res;
}
const res = nQueens(8);
console.log("结果为::", res);
