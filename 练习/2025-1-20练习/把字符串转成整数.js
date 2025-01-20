/**
 *
 * @param {string} str
 */
function myAtoi(str) {
  const tempStr = str.trim();

  const len = tempStr.length;
  let result = 0;
  let sign = 1;
  let index = 0;
  if (tempStr[index] === "-") {
    sign = -1;
    index++;
  } else if (tempStr[index] === "+") {
    index++;
  }

  const regular = /^\d$/;
  while (index < len) {
    const digit = tempStr[index] - "0";

    if (!regular.test(digit)) {
      return NaN;
    }
    if (
      result > (2 ** 31 - 1) / 10 ||
      (result === (2 ** 31 - 1) / 10 && digit < 7)
    ) {
      return sign === -1 ? -(2 ** 31) : 2 ** 31 - 1;
    }

    result = result * 10 + digit;
    index++;
  }
  return result * sign;
}

// 测试
console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648 (超出范围)
