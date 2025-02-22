/**
 * 递归实现字符串转整数
 * @param {string} str
 * @param {number} index 当前索引
 * @param {number} result 当前累积的数字
 * @param {number} sign 符号（1表示正，-1表示负）
 * @param {boolean} started 是否已经开始处理数字
 * @returns {number}
 */
function myAtoi(str) {
  const tempStr = str.trim();
  return helper(tempStr, 0, 0, 1, false);
}

/**
 * 递归辅助函数
 */
function helper(str, index, result, sign, started) {
  if (index === str.length) {
    return result * sign;
  }

  const currentChar = str[index];

  // 如果当前字符是空格且没有开始处理数字，继续递归
  if (!started && currentChar === " ") {
    return helper(str, index + 1, result, sign, started);
  }

  // 如果当前字符是符号
  if (!started && (currentChar === "-" || currentChar === "+")) {
    sign = currentChar === "-" ? -1 : 1;
    return helper(str, index + 1, result, sign, true);
  }

  // 如果当前字符是数字
  if (currentChar >= "0" && currentChar <= "9") {
    const digit = currentChar - "0";
    result = result * 10 + digit;

    // 溢出判断
    if (result > 2 ** 31 - 1) {
      return sign === -1 ? -(2 ** 31) : 2 ** 31 - 1;
    }

    return helper(str, index + 1, result, sign, true);
  }

  // 如果当前字符不是数字且已经开始处理数字，退出递归
  return result * sign;
}

// 测试
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
