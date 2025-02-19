/**
 * 最小覆盖子串
 * 决策单调性
 * leetcode: https://leetcode.cn/problems/minimum-window-substring/solutions/257359/zui-xiao-fu-gai-zi-chuan-by-leetcode-solution/
 */
function minWindow(s: string, t: string): string {
  const len1 = s.length;
  const len2 = t.length;
  const t_map = new Map();
  for (const char of t) {
    t_map.set(char, (t_map.get(char) || 0) + 1);
  }
  const required = t_map.size;

  // 用于保存 s 数组中的字符数量的 map
  const window = new Map();
  // 保存 s 数组中对 t 数组满足条件的数量
  let formed = 0;
  let left = 0;
  let right = 0;
  // 保存最终的数量以及左右下标
  let ans = [-1, 0, 0];
  while (right < len1) {
    window.set(s[right], (window.get(s[right]) || 0) + 1);
    if (t_map.has(s[right]) && window.get(s[right]) === t_map.get(s[right])) {
      formed++;
    }
    // 说明找到了满足条件的子串，然后左边界需要搜索，找子串中满足条件的更小子串
    while (left <= right && formed === required) {
      const charLeft = s[left];
      if (ans[0] === -1 || right - left + 1 < ans[0]) {
        ans = [right - left + 1, left, right];
      }

      // 缩小窗口
      window.set(charLeft, window.get(charLeft) - 1);
      if (t_map.has(charLeft) && window.get(charLeft) < t_map.get(charLeft)) {
        formed--;
      }
      left++;
    }
    right++;
  }
  // 返回最小窗口子串
  return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

export {};
