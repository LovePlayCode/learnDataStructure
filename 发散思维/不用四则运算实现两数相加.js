function add(a, b) {
  while (b !== 0) {
    // 计算不带进位的和
    let sum = a ^ b;

    // 计算进位，并左移一位
    let carry = (a & b) << 1;

    // 将结果和进位相加
    a = sum;
    b = carry;
  }

  return a;
}

// 测试
console.log(add(5, 3)); // 输出 8
console.log(add(-5, 3)); // 输出 -2
console.log(add(10, 20)); // 输出 30
console.log(add(3, 3));
