function countBitsToChange(m, n) {
  // 统计 m 和 n 哪些位不同
  let diff = m ^ n;
  // 计算 diff 中 1的个数
  let count = 0;

  while (diff) {
    // 将最右边的数依次和 1 做比较
    count += diff & 1;
    // 进行 diff 的 右移操作
    diff = diff >>> 1;
  }
  return count;
}

const res = countBitsToChange(10, 13);
console.log("res==", res);
