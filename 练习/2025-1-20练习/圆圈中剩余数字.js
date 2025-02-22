function josephus(n, m) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let index = 0;
  while (arr.length > 1) {
    index = (index + m - 1) % arr.length;
    arr.splice(index, 1); // 删除该位置的元素
  }
  return arr[0]; // 返回最后剩下的数字
}

// 测试
console.log(josephus(5, 3)); // 输出 3
console.log(josephus(7, 2)); // 输出 6
