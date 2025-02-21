/**
 * @param {string} s
 * @return {number}
 */

var maxUniqueSplit = function (s) {
  let set = new Set(); // 用于存储唯一的子字符串
  let maxCount = 0; // 记录最大的拆分数目

  const dfs = (index, count) => {
    if (index === s.length) {
      maxCount = Math.max(maxCount, count);
      return;
    }

    let currentStr = "";
    for (let i = index; i < s.length; i++) {
      currentStr += s[i]; // 扩展当前的子字符串

      if (!set.has(currentStr)) {
        set.add(currentStr); // 如果子字符串不重复，加入集合
        dfs(i + 1, count + 1); // 递归处理下一个子字符串
        set.delete(currentStr); // 回溯，移除当前子字符串
      }
    }
  };

  dfs(0, 0); // 从字符串的第一个字符开始
  return maxCount;
};

// 测试
console.log(maxUniqueSplit("aba")); // 输出：2
console.log(maxUniqueSplit("aa")); // 输出：1
console.log(maxUniqueSplit("abcabc")); // 输出：3
