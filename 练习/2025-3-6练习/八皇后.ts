let result = new Array(8).fill(0);
function cal8queens(row: number) {
  if (row === 8) {
    // 打印
    printQueens(result);
    return;
  }
  for (let col = 0; col < 8; col++) {
    if (isOk(row, col)) {
      result[row] = col;
      cal8queens(row + 1);
    }
  }
}

function isOk(row: number, col: number) {
  let leftUp = col - 1,
    rightUp = col + 1;
  // 判断 row 行col列放置是否合适，需要判断左上右上角相关对角线是否放置过八皇后。
  for (let i = row - 1; i >= 0; i--) {
    if (result[i] === col) {
      return false;
    }
    if (leftUp >= 0) {
      if (result[i] === leftUp) {
        return false;
      }
    }
    if (rightUp < 8) {
      if (result[i] === rightUp) {
        return false;
      }
    }
    --leftUp;
    ++rightUp;
  }
  return true;
}

function printQueens(result: any) {
  for (let row = 0; row < 8; ++row) {
    let line = "";
    for (let column = 0; column < 8; ++column) {
      line += result[row] === column ? "Q " : "* ";
    }
    console.log(line);
  }
  console.log();
}

cal8queens(0);
