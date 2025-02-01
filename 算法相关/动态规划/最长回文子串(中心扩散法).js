/**
 *
 * @param {string} str
 */
function longestPalindrome(str) {
  if (str === undefined || str === null) {
    return "";
  }
  const len = str.length;
  if (len < 2) {
    return str;
  }
  let start = 0;
  let maxLen = 1;
  for (let i = 0; i < len; i++) {
    let leftLen = expandAroundCenter(str, i, i);
    let rightLen = expandAroundCenter(str, i, i + 1);
    let curMaxLen = Math.max(leftLen, rightLen);
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      console.log("i==", i);
      start = i - Math.floor((curMaxLen - 1) / 2);
    }
  }
  console.log(start);
  return str.slice(start, start + maxLen);
}

/**
 * @param {string} str
 * @param {number} left
 * @param {number} right
 */
function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
console.log(longestPalindrome("abcdefghijjihgfedcba"));
