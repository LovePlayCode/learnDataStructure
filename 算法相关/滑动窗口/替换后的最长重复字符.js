/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length;

  // 记录char 字符出现的次数
  const map = {};
  // [left,right]
  let left = 0;
  let right = 0;
  // 记录最大频率， 比如: AABAACC  A 出现的次数最多，那最大频率就是 4
  let maxCount = 0;
  let maxLength = 0;
  while (right < len) {
    const char = s[right];
    // 更新 map 结构，map 始终维护的是 char 对应的频率数
    map[char] = (map[char] || 0) + 1;
    // 更新最大频率数
    maxCount = Math.max(map[char], maxCount);

    // 判断是否满足题目要求
    if (right - left + 1 - maxCount > k) {
      map[s[left]]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};
