function minWindow(s: string, t: string): string {
  // 先找他是否满足条件
  // 条件：字符的个数相同，种类相同
  const set = new Set();
  const s1Length = s.length;
  const map = new Map();
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const s1Map = new Map();
  // t 中字符的种类个数
  const requireLength = map.size;
  // s 中字符的种类个数
  let s1RequireLength = 0;
  let left = 0;
  let right = 0;
  let ans = [-1, 0, 0];
  while (right < s1Length) {
    // 先往右边走
    if (map.has(s[right])) {
      s1Map.set(s[right], (s1Map.get(s[right]) || 0) + 1);
      console.log(s1Map);
      const count = s1Map.get(s[right]);
      if (count === map.get(s[right])) {
        s1RequireLength++;
      }
    }
    right++;

    // 说明满足了条件,此时要缩小左边
    while (left < right && s1RequireLength === requireLength) {
      const charLeft = s[left];
      console.log({ left, right });
      if (ans[0] === -1 || right - left < ans[0]) {
        ans = [right - left, left, right];
      }
      // 缩小窗口
      s1Map.set(charLeft, s1Map.get(charLeft) - 1 || 0);
      // 更新s1RequireLength
      if (map.has(charLeft) && s1Map.get(charLeft) < map.get(charLeft)) {
        s1RequireLength--;
      }
      left++;
    }
  }
  return ans[0] !== -1 ? s.slice(ans[1], ans[2]) : "";
}
export {};
const s = "ADOBECODEBANC";
minWindow(s, "ABC");
