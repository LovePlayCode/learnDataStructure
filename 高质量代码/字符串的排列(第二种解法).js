/**
 * 生成字符串的所有排列
 * @param {string} str 输入字符串
 * @returns {string[]} 所有排列的结果
 */
function getPermutations(str) {
  const result = [];

  /**
   * 递归生成排列
   * @param {string[]} chars 当前字符数组
   * @param {number} index 当前固定位置的索引
   */
  function permute(chars, index) {
    if (index === chars.length - 1) {
      result.push(chars.join("")); // 将当前排列加入结果集
      return;
    }

    for (let i = index; i < chars.length; i++) {
      // 交换当前固定字符和后面的字符
      [chars[index], chars[i]] = [chars[i], chars[index]];

      // 固定当前字符，递归排列剩下的字符
      permute(chars, index + 1);

      // 回溯，恢复原始顺序
      [chars[index], chars[i]] = [chars[i], chars[index]];
    }
  }

  permute(str.split(""), 0);
  return result;
}

// 测试
const input = "abc";
const permutations = getPermutations(input);
console.log(permutations);
