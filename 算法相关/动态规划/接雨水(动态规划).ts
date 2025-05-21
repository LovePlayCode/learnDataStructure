/**
 * topic address: https://leetcode.cn/problems/trapping-rain-water/solutions/692342/jie-yu-shui-by-leetcode-solution-tuvc/
 * @param height
 */
function trap(height: number[]): number {
  const len = height.length;
  // 表示 i及其左边最大的高度
  let leftMaxArr = new Array(len).fill(0);
  // 表示 i及其右边最大的高度
  let rightMaxArr = new Array(len).fill(0);
  leftMaxArr[0] = height[0];
  for (let i = 1; i < len; i++) {
    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i]);
  }
  rightMaxArr[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }
  return ans;
}
export {};
