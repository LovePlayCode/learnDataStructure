function lengthOfLongestSubstring(s: string): number {
  let right = -1;
  // 方便去从
  const set = new Set();
  const len = s.length;
  let res = 0;

  // 子串是单调递增的，所以先固定左边，右边一直+
  // 当遇到重复时，移动左边。
  for (let i = 0; i < len; i++) {
    if (i > 0) {
      set.delete(s[i - 1]);
    }
    while (right + 1 < len && !set.has(s[right + 1])) {
      set.add(s[right + 1]);
      ++right;
    }

    res = Math.max(res, right - i + 1);
  }
  return res;
}
