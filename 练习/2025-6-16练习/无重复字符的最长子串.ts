function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const memo = new Array(len).fill(-1);

  // 保存字符串出现的位置
  const lastIndex = new Map();
  const dfs = (pos: number) => {
    if (pos === 0) {
      // 终止条件：首字符
      lastIndex.set(s[0], 0);
      return 1;
    }
    if (memo[pos] !== -1) return memo[pos]; // 记忆化命中
    const char = s[pos];
    const preLen = dfs(pos - 1);
    let curLen = 0;

    // 如果当前lastIndex不存在 char 或者 位置大于preLen
    if (!lastIndex.has(char) || pos - lastIndex.get(char) > preLen) {
      curLen = preLen + 1;
    } else {
      curLen = pos - lastIndex.get(char)!; // 有重复，截断子串
    }
    lastIndex.set(char, pos);
    memo[pos] = curLen;
    return memo[pos];
  };
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans = Math.max(dfs(i), ans);
  }
  //   dfs(3, new Set());
  return ans;
}
console.log("result=", lengthOfLongestSubstring("abca"));
export {};
