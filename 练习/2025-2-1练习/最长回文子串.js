/**
 *
 * @param {string} s
 */
function longestPalindrome(s) {
  const len = s.length;

  // 长度为 1 的字符串本身是子串
  if (len === 1) {
    return s;
  }

  const dp = new Array(len).fill(false).map(() => {
    const flag = new Array(len).fill(false);
    return flag;
  });

  // 单个字符串是回文
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  let start = 0; // 回文子串的起始位置
  let maxLen = 1; // 最长回文子串的长度
  for (let curLen = 2; curLen <= len; curLen++) {
    for (let i = 0; i <= len - curLen; i++) {
      const j = i + curLen - 1;
      if (s[i] === s[j]) {
        if (curLen === 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (curLen > maxLen) {
            maxLen = curLen;
            start = i;
          }
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
}
