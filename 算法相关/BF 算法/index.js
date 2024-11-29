/**
 * 实现BF 算法
 * 名词：主串和模式串
 * 1. 遍历主串，从每个起始位置开始尝试匹配
 * 2. 遍历模式串，与主串的位置比较
 * 3. 如果找到，则返回索引，否则返回-1
 * @param {string} mainString
 * @param {string} pattern
 */
function BF(mainString, pattern) {
  const mainLength = mainString.length;
  const patternLength = pattern.length;
  for (let i = 0; i <= mainLength - patternLength; i++) {
    let j = 0;
    while (j < patternLength && mainString[i + j] === pattern[j]) {
      j++;
    }
    if (j === patternLength) {
      return i;
    }
  }
  return -1;
}

/**
 * RK 算法
 */
function rabinKarp(mainString, pattern) {
  const d = 256; // 字符集大小
  const q = 101; // 一个大素数，用于哈希取模
  const n = mainString.length;
  const m = pattern.length;

  let hashP = 0; // 模式串哈希值
  let hashS = 0; // 当前子串哈希值
  let h = 1; // d^(m-1) % q，用于滚动哈希

  // 计算 h = d^(m-1) % q
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }
  console.log(h);
  // 计算模式串和主串第一个窗口的哈希值
  for (let i = 0; i < m; i++) {
    hashP = (d * hashP + pattern.charCodeAt(i)) % q;
    hashS = (d * hashS + mainString.charCodeAt(i)) % q;
  }

  // 滑动窗口匹配
  for (let i = 0; i <= n - m; i++) {
    // 如果哈希值相等，进一步逐字符比较
    if (hashP === hashS) {
      let j = 0;
      while (j < m && mainString[i + j] === pattern[j]) {
        j++;
      }
      if (j === m) {
        return i; // 匹配成功，返回起始索引
      }
    }

    // 更新哈希值，计算下一个窗口
    if (i < n - m) {
      hashS =
        (d * (hashS - mainString.charCodeAt(i) * h) +
          mainString.charCodeAt(i + m)) %
        q;

      // 确保哈希值为正数
      if (hashS < 0) {
        hashS += q;
      }
    }
  }

  return -1; // 匹配失败
}

// 测试示例
const mainString = "hello world";
const pattern = "world";
const result = rabinKarp(mainString, pattern);

if (result !== -1) {
  console.log(`Pattern found at index: ${result}`);
} else {
  console.log("Pattern not found.");
}
