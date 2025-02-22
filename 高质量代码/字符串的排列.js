/**
 * 生成字符串的所有排列
 * @param {string} str 输入字符串
 * @returns {string[]} 所有排列的数组
 */
function permuteString(str) {
  const result = [];

  /**
   * 递归函数生成排列
   * @param {string} prefix 当前排列前缀
   * @param {string} remaining 剩余未排列的字符
   */
  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      result.push(prefix); // 如果没有剩余字符，将当前排列加入结果
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      // 将剩余字符的每个字符分别固定在前缀末尾
      const newPrefix = prefix + remaining[i];

      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      permute(newPrefix, newRemaining);
    }
  }

  permute("", str); // 初始化递归
  return result;
}

// 测试
const input = "abc";
const permutations = permuteString(input);
console.log(permutations);
