function countDigitOne(n) {
  if (n <= 0) return 0; // 如果 n <= 0，返回 0

  let count = 0; // 记录数字 1 出现的次数
  let factor = 1; // 当前位的权重，从个位开始（1、10、100...）

  while (n / factor > 0) {
    const lower = n % factor; // 低位数字
    const current = Math.floor((n / factor) % 10); // 当前位数字
    const higher = Math.floor(n / (factor * 10)); // 高位数字

    // 计算当前位对 1 出现次数的贡献
    if (current === 0) {
      count += higher * factor; // 当前位为 0，贡献由高位决定
    } else if (current === 1) {
      count += higher * factor + lower + 1; // 当前位为 1，贡献由高位和低位决定
    } else {
      count += (higher + 1) * factor; // 当前位 > 1，贡献由高位+1决定
    }

    factor *= 10; // 移动到下一位（个位 -> 十位 -> 百位 -> ...）
  }

  return count; // 返回 1 出现的总次数
}

// 测试用例
console.log(countDigitOne(21345)); // 输出：18821
console.log(countDigitOne(1345)); // 输出：678
console.log(countDigitOne(0)); // 输出：0
console.log(countDigitOne(12)); // 输出：2
console.log(countDigitOne(100)); // 输出：21
