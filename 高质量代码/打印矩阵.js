/**
 * 从左到右打印矩阵。 这个函数主要是先控制内行
 * @param {number[][]} numbers
 * @param {number} cols
 * @param {number} rows
 */
function PrintMatrixColckwisely(numbers, cols, rows) {
  if (numbers === null || cols <= 0 || rows <= 0) {
    return;
  }
  let start = 0;
  while (cols > start * 2 && rows > start * 2) {
    PrintMatrixInCircle(numbers, cols, rows, start);
    start++;
  }
}

/**
 * 打印圈
 * @param {number[][]} numbers
 * @param {number} cols
 * @param {number} rows
 * @param {number} start
 */
function PrintMatrixInCircle(numbers, cols, rows, start) {
  const endX = cols - 1 - start;
  const endY = rows - 1 - start;

  let res = [];
  // 从左到右

  for (let i = start; i <= endX; i++) {
    res.push(numbers[start][i]);
  }
  console.log(res.join(","));
  res = [];

  // 从上到下
  if (start < endY) {
    for (let i = start + 1; i <= endY; i++) {
      res.push(numbers[i][endX]);
    }
    console.log(res.join(","));
    res = [];
  }
  // 从右到左,有两行两列才可以进行矩阵的打印
  if (endX - start >= 2 && endY - start >= 2) {
    for (let i = endX - 1; i >= start; i--) {
      res.push(numbers[endY][i]);
    }
    console.log(res.join(","));
    res = [];
  }
  // 从下到上 必须要三行两列， 所以只需要大于 1 和大于 2. 手指头原理
  if (endX - start >= 1 && endY - start >= 2) {
    for (let i = endY - 1; i >= start + 1; i--) {
      res.push(numbers[i][start]);
    }
    console.log(res.join(","));
    res = [];
  }
}

function generateRandomArr(n) {
  const arr = new Array(n).fill(0).map((item) => {
    const newArr = new Array(n).fill(0);
    return newArr.map((item) => {
      const res = Math.random() * 10;
      return res.toFixed(0);
    });
  });
  return arr;
}

const arr = new generateRandomArr(5);
console.log("原始数组:", arr);
PrintMatrixColckwisely(arr, 5, 5);
