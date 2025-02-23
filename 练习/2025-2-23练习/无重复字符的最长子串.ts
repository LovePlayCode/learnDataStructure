function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let left = 0;
  let right = 0;
  const len = s.length;
  let maxLength = 0;
  while (left < len) {
    if (left !== 0) {
      set.delete(s[left - 1]);
    }
    while (right < len && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }
    maxLength = Math.max(maxLength, right - left);
    left++;
  }
  return maxLength;
}
export {};
