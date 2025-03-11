/**
 * 
 * 
 * 给定一个 n * m 
 的二维网格 grid ，网格中的每个单元格包含一个非负整数，表示该单元格的代价。
 机器人以左上角单元格为起始点，每次只能向下或者向右移动一步，直至到达右下角单元格。请返回从左上角到右下角的最小路径和。
 */

function minPathSum(grid: number[][]): number {
  const i = grid.length;
  const j = grid[0].length;

  return minPathSumDFS(grid,i,j)
}
/**
*
* @param {number[][]} grid
* @param {number} i
* @param {number} j
* @param {number[]} state
* @param {number[]} res
*/
function minPathSumDFS(grid, i, j) {
  console.log(i,j)
const memo = new Array(i).fill(-1).map(item=>{
  return new Array(j).fill(-1)
})
const dfs = (i, j) => {
  // 若为左上角单元格，则终止搜索
  if (i === 0 && j === 0) {
    return grid[0][0];
  }
  // 若行列索引越界，则返回 +∞ 代价
  if (i < 0 || j < 0) {
    return Infinity;
  }
  if(memo[i][j]!==-1){
    return memo[i][j]
  }

  // 计算从左上角到 (i-1, j) 和 (i, j-1) 的最小路径代价
  const up = dfs(i - 1, j);
  const left = dfs(i, j - 1);
  // 返回从左上角到 (i, j) 的最小路径代价
  memo[i][j] =  Math.min(left, up) + grid[i][j];
  return Math.min(left, up) + grid[i][j];
}
return dfs(i-1,j-1)
}

