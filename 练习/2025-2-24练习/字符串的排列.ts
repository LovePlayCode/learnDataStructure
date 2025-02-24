function checkInclusion(s1: string, s2: string): boolean {
  // 汇总长度以及字符串种类
  const s1Map = new Map();
  const len = s2.length;

  for (const char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }
  const s1CharSize = s1Map.size;
  const s2Map = new Map();
  let left = 0;
  let right = 0;
  let count = 0;
  while (right < len) {
    // 如果存在&&
    if (s1Map.has(s2[right])) {
      s2Map.set(s2[right], (s2Map.get(s2[right]) || 0) + 1);
      const curCount = s2Map.get(s2[right]);
      if (curCount === s1Map.get(s2[right])) {
        count++;
      }
    }
    while (count === s1CharSize) {
      if (right - left + 1 === s1.length) {
        return true;
      }
      s2Map.set(s2[left], (s2Map.get(s2[left]) || 0) - 1);
      const curChar = s2[left];
      const countLeft = s2Map.get(curChar);
      left++;
      if (s1Map.has(curChar) && countLeft < s1Map.get(curChar)) {
        count--;
      }
    }
    right++;
  }
  return false;
}

export {};
