/**
 * 生成字符串的所有组合，按长度递增的顺序排列
 * @param {string} str 输入字符串
 * @returns {string[]} 按顺序排列的所有组合
 */
function getCombinationsByOrder(str) {
  const result = [];

  /**
   * 递归生成组合
   * @param {string} prefix 当前组合前缀
   * @param {number} start 当前字符的起始索引
   * @param {number} length 目标组合长度
   */
  function combine(prefix, start, length) {
    if (prefix.length === length) {
      result.push(prefix);
      return;
    }
    for (let i = start; i < str.length; i++) {
      combine(prefix + str[i], i + 1, length);
    }
  }

  // 从长度为 1 到字符串的总长度依次生成组合
  for (let len = 1; len <= str.length; len++) {
    combine("", 0, len);
  }

  return result;
}

// 测试
const input = "abcd";
const combinations = getCombinationsByOrder(input);
console.log(combinations);
