/**
 *
 * 无重复字符的最长子串
 * leetcode: https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s: string): number {
  // 定义一个 set 用于去重
  const set = new Set();
  const n = s.length;
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; i++) {
    // 每次开始前删除一个元素，开始下轮计算
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
      set.add(s.charAt(rk + 1));
      rk++;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
}
export {};
