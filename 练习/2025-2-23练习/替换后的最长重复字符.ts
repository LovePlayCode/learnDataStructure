function characterReplacement(s: string, k: number): number {
  // 变量记录当前字符串中出现最多频次的字符
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let resMaxCount = 0;
  const len = s.length;
  const map = new Map();
  let res = 0;
  while (right < len) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    const count = map.get(s[right]);
    maxCount = Math.max(maxCount, count);
    // 第一次不满足条件，所以 left 需要左移动
    if (right - left + 1 - maxCount > k) {
      map.set(s[left], (map.get(s[left]) || 0) - 1);
      left++;
    }
    resMaxCount = Math.max(resMaxCount, right - left + 1);
    right++;
  }
  return resMaxCount;
}
export {};
