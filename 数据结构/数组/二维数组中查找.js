/**
 *
 * @param {number[][]} matrix
 * @param {number} rows
 * @param {number} colmns
 * @param {number} number
 */
function Find(matrix, rows, colmns, number) {
  if (!Array.isArray(matrix)) {
    throw new TypeError("类型错误!");
  }

  let row = 0;
  let col = colmns - 1;
  while (row < rows && col >= 0) {
    console.log(matrix[row][col]);
    if (matrix[row][col] === number) {
      return true;
    }
    if (matrix[row][col] > number) {
      col = col - 1;
    }
    if (matrix[row][col] < number) {
      row = row + 1;
    }
  }
  return false;
}

console.log(
  Find(
    [
      [1, 2, 8, 9],
      [2, 4, 9, 12],
      [4, 7, 10, 13],
      [6, 8, 11, 15],
    ],
    4,
    4,
    40
  )
);
