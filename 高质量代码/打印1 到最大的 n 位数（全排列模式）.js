function printNumbers(n) {
  // 如果n为0或负数，则没有数字可以打印
  if (n <= 0) return;

  // 当前数字数组的容器
  let currentNumber = new Array(n).fill("0");

  // 全排列递归生成每一位的数字
  // 递推公式: fx = currentIndex === n 使用""join currentNumber,去除前导零,打印  return
  //          循环 判断当前数字是否为
  function generate(currentIndex) {
    if (currentIndex === n) {
      const num = currentNumber.join("");
      // 去除前导零
      const realNum = parseInt(num);
      if (realNum > 0) {
        console.log(realNum);
      }
      return;
    }
    for (let digit = 0; digit <= 9; digit++) {
      currentNumber[currentIndex] = digit + "";
      generate(currentIndex + 1);
    }
  }

  // 从第0位开始生成数字
  generate(0);
}

// 测试打印1到最大的3位数
printNumbers(3);
