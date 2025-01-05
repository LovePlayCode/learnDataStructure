/**
 * n 皇后问题
 * @param {number} n
 * 逻辑:
 * 1. 按行放置，同时因为不能出现在同一列上，所以需要有一个数组来标识是否处于同一列
 * 2. 不能出现在同一对角线上(主要是主对角线和次对角线)。
 * 3. 按列回溯
 */
function nQueens(n) {
  const state = new Array(n).fill(false).map((item) => {
    return new Array(n).fill("#");
  });

  // 用于标识是否可以放置
  const cols = new Array(n).fill(false);
  // 主对角线
  const mainDiagonal = new Array(2 * n - 1).fill(false);
  // 次对角线
  const secondaryDiagonal = new Array(2 * n - 1).fill(false);
  // 结果数组，用于存放 N 皇后的所有结果
  const res = [];
  function backtrack(row, n) {
    if (row === n) {
      res.push(state.map((item) => item.slice()));
      return;
    }
    for (let col = 0; col < cols.length; col++) {
      if (
        !cols[col] &&
        !mainDiagonal[row - col + n - 1] &&
        !secondaryDiagonal[row + col]
      ) {
        state[row][col] = "Q";
        cols[col] = true;
        mainDiagonal[row - col + n - 1] = true;
        secondaryDiagonal[row + col] = true;
        backtrack(row + 1, n);
        state[row][col] = "#";
        cols[col] = false;
        mainDiagonal[row - col + n - 1] = false;
        secondaryDiagonal[row + col] = false;
      }
    }
  }
  backtrack(0, n);
  console.log(res);
}
nQueens(4);
