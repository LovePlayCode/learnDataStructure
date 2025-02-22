/**
 * 长按键入
 * leetcode: https://leetcode.cn/problems/long-pressed-name/description/
 */
function isLongPressedName(name: string, typed: string): boolean {
  const n = name.length;
  const m = typed.length;
  let i = 0,
    j = 0;
  while (j < m) {
    // 如果当前 j===当前 i，说明匹配上了，两个元素直接都+1
    if (i < n && name[i] === typed[j]) {
      i++;
      j++;
      // 只有一个匹配上，只加一个
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      j++;
      // 其他情况返回 false 即可，说明不满足要求
    } else {
      return false;
    }
  }
  return i === n;
}
export {};
