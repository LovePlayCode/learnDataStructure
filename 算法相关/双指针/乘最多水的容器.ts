/**
 *
 * 乘最多水的容器
 * leetcode: https://leetcode.cn/problems/container-with-most-water/
 */
function maxArea(height: number[]): number {
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let res = 0;
  while (left <= right) {
    const minVal = Math.min(height[left], height[right]);
    const x = right - left;
    const volume = x * minVal;
    res = Math.max(volume, res);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

export {};
