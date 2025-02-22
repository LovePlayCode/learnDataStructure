function printNumbers(n) {
  // 如果n小于等于0，直接返回
  if (n <= 0) return;

  // 当前数字数组的容器
  let currentNumber = new Array(n).fill("0");

  // 全排列递归生成每一位的数字
  function generate(currentIndex) {
    // 当递归到最后一位时，输出当前数字
    if (currentIndex === n) {
      // 去除前导零并打印
      let numStr = currentNumber.join("");
      let num = parseInt(numStr); // 转换成整数
      if (num > 0) {
        console.log(num);
      }
      return;
    }

    // 递归生成每一位上的数字
    // 第一位只能是1-9，其他位可以是0-9
    let start = 0;
    let end = 9;

    for (let digit = start; digit <= end; digit++) {
      currentNumber[currentIndex] = digit.toString(); // 设置当前位的数字
      generate(currentIndex + 1); // 递归到下一位
    }
  }

  // 从第0位开始生成数字
  generate(0);
}

// 测试打印1到最大的3位数
printNumbers(3);
