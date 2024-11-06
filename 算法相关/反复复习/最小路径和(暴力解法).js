/**
 * 
 * @param {*} grid 
 * @param {*} i 
 * @param {*} j
 * 1. 首行首列的最小路径为 grid[0][0]  i === 0 && j === 0
 * 2. i < 0 j < 0 返回无穷
 * 3. left up  从下到上
 * 4. Math.min(left,up) + grid[i][j] 
 */

function minPathSumDFS(grid,i,j){
    if(i === 0 && j === 0){
        return grid[0][0]
    }
    if(i < 0 || j < 0){
        return Infinity
    }
    const left = minPathSumDFS(grid,i,j-1)
    const up = minPathSumDFS(grid,i-1,j)
    return Math.min(left,up) + grid[i][j]
}