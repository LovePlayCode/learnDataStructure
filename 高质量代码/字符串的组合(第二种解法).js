/**
 * 生成字符串的所有组合（递归拆分：包含首字符和不包含首字符的情况）
 * @param {string} str 输入字符串
 * @param {number} m 目标组合长度
 * @returns {string[]} 长度为 m 的所有组合
 */
function getCombinationsRecursive(str, m) {
  if (m === 0) {
    return [""];
  }
  if (str.length < m) {
    return [];
  }
  let firstStr = str[0];
  const remainingStr = str.slice(1);

  const includeList = getCombinationsRecursive(remainingStr, m - 1).map(
    (item) => {
      return firstStr + item;
    }
  );
  const excludeList = getCombinationsRecursive(remainingStr, m);
  return includeList.concat(excludeList);
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
