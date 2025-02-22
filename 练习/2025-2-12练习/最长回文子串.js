/**
 * 最长回文子串
 * @param {string} s
 */
function longestPalindrome(s) {
  if (s.length < 1) {
    return "";
  }
  const len = s.length;
  // 状态i,j代表 开始i 位置的 j结束位置 的串是否为回文子串
  const dp = new Array(len).fill(0).map((item) => {
    return new Array(len).fill(false);
  });
  // 1,1都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  let start = 0;
  let maxLength = 1;
  for (let length = 2; length <= len; length++) {
    for (let i = 0; i <= len - length; i++) {
      const j = i + length - 1;
      if (s[i] === s[j]) {
        if (length === 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && length > maxLength) {
        maxLength = length;
        start = i;
      }
    }
  }
  return s.substring(start, start + maxLength);
}
// 测试
console.log(longestPalindrome("babad")); // 输出 "bab" 或 "aba"
console.log(longestPalindrome("cbbd")); // 输出 "bb"
