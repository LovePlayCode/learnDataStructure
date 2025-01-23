/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length;
  const map = {};
  // [left,right]
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let maxLength = 0;
  while (right < len) {
    const char = s[right];
    map[char] = (map[char] || 0) + 1;
    maxCount = Math.max(map[char], maxCount);
    if (right - left + 1 - maxCount > k) {
      map[s[left]]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};
