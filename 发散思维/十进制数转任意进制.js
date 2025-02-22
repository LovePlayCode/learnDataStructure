function decimalToBase(num, base) {
  // 检查进制是否合法
  if (base < 2 || base > 36) {
    throw new Error("Base must be between 2 and 36");
  }

  // 处理0的特殊情况
  if (num === 0) return "0";

  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 进制字符集
  let result = "";
  let isNegative = num < 0; // 判断是否为负数

  // 处理负数，转换为正数进行后续处理
  if (isNegative) {
    num = Math.abs(num);
  }

  // 不断除以base，直到商为0
  while (num > 0) {
    const remainder = num % base; // 余数
    result = digits[remainder] + result; // 获取字符并添加到结果前面
    num = Math.floor(num / base); // 更新商
  }

  // 如果是负数，添加负号
  if (isNegative) {
    result = "-" + result;
  }

  return result;
}

// 测试
console.log(decimalToBase(100, 17)); // 输出 "5D"
console.log(decimalToBase(17, 10)); // 输出 "17"
console.log(decimalToBase(0, 2)); // 输出 "0"
console.log(decimalToBase(256, 16)); // 输出 "100"
console.log(decimalToBase(-100, 36)); // 输出 "-2S"
console.log(decimalToBase(255, 2)); // 输出 "11111111"
console.log(decimalToBase(-256, 8)); // 输出 "-400"
