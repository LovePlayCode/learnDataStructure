function characterReplacement(s, k) {
  let maxLength = 0;

  // 遍历每个子串的起始位置
  for (let start = 0; start < s.length; start++) {
    let freq = new Array(26).fill(0); // 统计字符频率
    let maxFreq = 0; // 当前子串中出现次数最多的字符的频率
    let changes = 0; // 需要改变的字符数

    // 遍历每个子串的结束位置
    for (let end = start; end < s.length; end++) {
      const charIndex = s[end].charCodeAt(0) - "A".charCodeAt(0);
      freq[charIndex]++;

      // 更新当前子串中出现次数最多的字符的频率
      maxFreq = Math.max(maxFreq, freq[charIndex]);

      // 当前子串长度减去最多字符出现的次数，得到需要更改的字符数
      changes = end - start + 1 - maxFreq;

      // 如果更改的字符数超过 k，跳出循环，继续考虑下一个子串
      if (changes > k) {
        break;
      }

      // 更新最大长度
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }

  return maxLength;
}

// 测试
console.log(characterReplacement("ABAB", 2)); // 输出 4
console.log(characterReplacement("AABABBA", 1)); // 输出 4
