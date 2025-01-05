/**
 * 生成字符串的所有组合（递归拆分：包含首字符和不包含首字符的情况）
 * @param {string} str 输入字符串
 * @param {number} m 目标组合长度
 * @returns {string[]} 长度为 m 的所有组合
 */
function getCombinationsRecursive(str, m) {
  // 边界条件
  if (m === 0) return [""]; // 长度为 0 的组合是空字符串
  if (str.length < m) return []; // 字符不足以生成长度为 m 的组合

  // 分解为两个子问题
  const firstChar = str[0];
  const rest = str.slice(1);

  // 1. 包含第一个字符的组合
  const includeFirst = getCombinationsRecursive(rest, m - 1).map(
    (comb) => firstChar + comb
  );

  // 2. 不包含第一个字符的组合
  const excludeFirst = getCombinationsRecursive(rest, m);

  // 合并两种情况
  return includeFirst.concat(excludeFirst);
}

/**
 * 生成字符串的所有组合（按长度从 1 到 n）
 * @param {string} str 输入字符串
 * @returns {string[]} 所有组合
 */
function getAllCombinations(str) {
  const result = [];
  for (let m = 1; m <= str.length; m++) {
    result.push(...getCombinationsRecursive(str, m));
  }
  return result;
}

// 测试
const input = "abc";
const combinations = getAllCombinations(input);
console.log(combinations);
