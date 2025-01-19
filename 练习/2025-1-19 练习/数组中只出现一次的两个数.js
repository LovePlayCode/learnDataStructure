/**
 *
 * @param {number[]} nums
 */
function singleNumber(nums) {
  // 对所有数字异或
  let xor = 0;
  for (let num of nums) {
    xor ^= num;
  }

  // 求最低位是 1 的
  xor = xor & -xor;
  let num1 = "";
  let num2 = "";
  // 分组
  // 求解
  for (let num of nums) {
    if ((num & xor) === 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
}

// 测试
console.log(singleNumber([4, 1, 2, 1, 2, 5])); // 输出 [4, 5]
