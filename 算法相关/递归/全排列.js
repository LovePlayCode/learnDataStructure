function printPermutations(data, length, k) {
  if (k === 1) {
    let str = "";
    for (let i = 0; i < length; i++) {
      str = str + " " + data[i];
    }
    console.log(str);
  }
  for (let i = 0; i < k; i++) {
    let temp = data[i];
    data[i] = data[k - 1];
    data[k - 1] = temp;
    printPermutations(data, length, k - 1);
    temp = data[i];
    data[i] = data[k - 1];
    data[k - 1] = temp;
  }
}

printPermutations([1, 2, 3], 3, 3);

function cellCount(n) {
  // 基础条件：小时数为 0 或小于 0 时，只有 1 个初始细胞
  if (n <= 0) {
    return 1;
  }
  // 递归关系：当前细胞数 = 前 1 小时细胞数 + 前 2 小时细胞数 + 前 3 小时细胞数
  return cellCount(n - 1) + cellCount(n - 2) + cellCount(n - 3);
}

// 测试例子
console.log(cellCount(3)); // 输出容器中 5 小时后的细胞数量
