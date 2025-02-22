function myAtoi(str) {
  // 删除两端的空格
  str = str.trim();

  // 如果空字符串，返回 0
  if (str.length === 0) return 0;

  // 初始化结果和符号
  let result = 0;
  let sign = 1;
  let index = 0;

  // 判断符号
  if (str[index] === "-") {
    sign = -1;
    index++;
  } else if (str[index] === "+") {
    index++;
  }

  // 遍历字符串，逐个字符转为数字
  while (index < str.length) {
    const digit = str[index] - "0"; // 将字符转为对应的数字
    if (digit < 0 || digit > 9) {
      break; // 遇到非数字字符，结束转换
    }

    // 检查是否超出整数范围（避免溢出）
    if (
      result > (Math.pow(2, 31) - 1) / 10 ||
      (result === (Math.pow(2, 31) - 1) / 10 && digit > 7)
    ) {
      return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31); // 返回边界值
    }

    result = result * 10 + digit;
    index++;
  }

  // 返回结果
  return result * sign;
}

// 测试
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648 (超出范围)
