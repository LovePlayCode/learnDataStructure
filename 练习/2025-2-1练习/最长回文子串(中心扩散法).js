/**
 *
 * @param {string} s
 */
function longestPalindrome(s) {
  const len = s.length;
  if (len === 1) {
    return s;
  }
  let start = 0;
  let maxLen = 1;
  function expandAroundCenter(left, right) {
    while (left > 0) {}
  }
  for (let i = 0; i < len; i++) {
    const left = expandAroundCenter(i, i);
    const right = expandAroundCenter(i, i + 1);
    const curMaxLen = Math.max(left, right);
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      start = i - Math.floor((curMaxLen - 1) / 2);
    }
  }
  return s.slice(start, start + maxLen);
}
