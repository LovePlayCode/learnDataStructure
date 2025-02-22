/**
 *
 * @param {string} str
 */
function longestPalindrome(str) {
  if (str === null || str === undefined) {
    return "";
  }

  // 定义 dp 数组 dp[i][j] 表示长度i,j是否为回文
  const dp = new Array(str.length).fill(false).map((item) => {
    const ar = new Array(str.length).fill(false);
    return ar;
  });

  // 初始化所有长度为 1的子串都是回文串
  for (let i = 0; i < str.length; i++) {
    dp[i][i] = true;
  }
  let start = 0; // 回文子串的起始位置
  let maxLen = 1; // 最长回文子串的长度
  // 控制串的长度
  for (let len = 2; len <= str.length; len++) {
    for (let i = 0; i <= str.length - len; i++) {
      // 确定右边界
      const j = i + len - 1;
      // 当前左右都相等，有两种情况，为长度为 2 或者 i+1和 j-1 依旧是一个子串
      if (str[i] === str[j]) {
        if (len === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (len > maxLen) {
            maxLen = len;
            start = i;
          }
        }
      }
    }
  }

  return str.substring(start, start + maxLen);
}
longestPalindrome("babab");
