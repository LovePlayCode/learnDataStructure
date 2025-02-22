function printNumbers(n) {
  // 处理边界情况：如果n为0，直接返回
  if (n <= 0) {
    return;
  }

  // 初始化当前数字为 "1"
  let currentNumber = "1";

  // 使用循环，从 1 开始到最大 n 位数
  while (currentNumber.length <= n) {
    console.log(currentNumber);

    // 通过模拟字符串加法实现递增
    currentNumber = incrementString(currentNumber);
  }
}

// 模拟字符串加法，递增字符串表示的数字
function incrementString(str) {
  let carry = 1;
  let result = [];

  // 从字符串末尾开始进行加法操作
  for (let i = str.length - 1; i >= 0; i--) {
    let sum = parseInt(str[i]) + carry;
    if (sum >= 10) {
      result.unshift("0");
      carry = 1;
    } else {
      result.unshift(sum.toString());
      carry = 0;
    }
  }

  // 如果还有进位，插入到前面
  if (carry === 1) {
    result.unshift("1");
  }

  return result.join("");
}

// 测试打印1到最大的3位数
printNumbers(3);
