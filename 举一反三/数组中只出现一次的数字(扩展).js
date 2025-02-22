function singleNumber(nums) {
  // 第一步：对所有数字进行异或，得到 x ^ y
  let xor = 0;
  for (let num of nums) {
    xor ^= num;
  }

  // 第二步：找到 xor 中最低位为 1 的位置
  let rightmostBit = xor & -xor; // 获取 xor 中最低位的 1

  // 第三步：分为两组并分别异或
  let num1 = 0,
    num2 = 0;
  for (let num of nums) {
    if ((num & rightmostBit) === 0) {
      num1 ^= num; // 该位为 0 的分组
    } else {
      num2 ^= num; // 该位为 1 的分组
    }
  }

  return [num1, num2]; // 返回两个只出现一次的数字
}

// 测试
console.log(singleNumber([4, 1, 2, 1, 2, 5])); // 输出 [4, 5]
