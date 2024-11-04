/**
 *   @param {number[][]} grid 
 * 给定一个 n x m 
 的二维网格 grid ，网格中的每个单元格包含一个非负整数，表示该单元格的代价。机器人以左上角单元格为起始点，
 每次只能向下或者向右移动一步，直至到达右下角单元格。请返回从左上角到右下角的最小路径和。
 */
let count = -1;
function backTrack(state, nums, i, j, res) {
  const row = nums.length;
  const col = nums[0].length;
  //   console.log('state=',state,i,j)
  console.log("路径和为::", state, i, j);
  if (i > row || j > col) {
    // console.log("路径和为::，进入", state, i, j);
    return;
  }
  if (i === row - 1 && j === col - 1) {
    res.push([...state]);
    // console.log("路径和为::，进入", state, i, j);
    return;
  }
  for (let i1 = i; i1 < row; i1++) {
    for (let j1 = j; j1 < col; j1++) {
      state.push(nums[i1][j1]);
      //   console.log(nums[i1][j1])
      if (j1 + 1 < col) {
        backTrack(state, nums, i1, j1 + 1, res);
      }
      if (i1 + 1 < row) {
        backTrack(state, nums, i1 + 1, j1, res);
      }
      state.pop();
    }
   
  }
}
function main(grid) {
  const res = [];
  backTrack(
    [],
    [
      [1, 3, 1, 5],
      [2, 2, 4, 2],
      [5, 3, 2, 1],
      [4, 3, 5, 2],
    ],
    0,
    0,
    res
  );
}
main([]);



/**
 * @param {number[][]} grid
 * @return {number} 返回最小路径和
 */
// let minSum = Infinity;

// function backTrack(state, nums, i, j, currentSum) {
//   const row = nums.length;
//   const col = nums[0].length;

//   // 累加当前路径的值
//   currentSum += nums[i][j];

//   // 如果越界则返回
//   if (i >= row || j >= col) {
//     return;
//   }

//   // 到达右下角，更新最小路径和
//   if (i === row - 1 && j === col - 1) {
//     minSum = Math.min(minSum, currentSum);
//     return;
//   }

//   // 尝试向右移动
//   for (let j1 = j + 1; j1 < col; j1++) {
//     backTrack(state, nums, i, j1, currentSum);
//     break; // 只递归一步，确保只移动到右边一格
//   }

//   // 尝试向下移动
//   for (let i1 = i + 1; i1 < row; i1++) {
//     backTrack(state, nums, i1, j, currentSum);
//     break; // 只递归一步，确保只移动到下方一格
//   }
// }

// function minPathSum(grid) {
//   minSum = Infinity; // 初始化最小路径和
//   backTrack([], grid, 0, 0, 0);
//   return minSum;
// }

// // 测试用例
// const grid = [
//   [1, 3, 1, 5],
//   [2, 2, 4, 2],
//   [5, 3, 2, 1],
//   [4, 3, 5, 2],
// ];
// console.log(minPathSum(grid)); // 输出最小路径和
