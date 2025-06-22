function lengthOfLongestSubstring(s: string): number {
  let count = 0;
  let left = 0;
  // 为什么定义为-1, 想一下这个场景，我们的 right 是一直往右移动的，right + 1 可以判断下一位是不是需要添加到set,
  // 如果 right 为0，且直接用 right 比较，会计算失误。
  // 所以最后的结果是 right - left + 1

  let right = -1;
  const len = s.length;
  const set = new Set();
  while (left < len) {
    if (left > 0) {
      set.delete(s.charAt(left - 1));
    }
    while (right + 1 < len && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1));
      right++;
    }
    count = Math.max(right - left + 1, count);
    left++;
  }
  return count;
}

export {};
