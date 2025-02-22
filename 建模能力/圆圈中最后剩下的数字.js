function josephus(n, m) {
  let arr = [];

  // 初始化圆圈，填充0到n-1的数字
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  let index = 0; // 当前删除的位置

  // 删除过程，直到只剩下一个数字
  while (arr.length > 1) {
    index = (index + m - 1) % arr.length; // 计算第m个位置的索引
    arr.splice(index, 1); // 删除该位置的元素
  }

  return arr[0]; // 返回最后剩下的数字
}

// 测试
console.log(josephus(5, 3)); // 输出 3
console.log(josephus(7, 2)); // 输出 6
