function maxArea(height: number[]): number {
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let res = 0;
  while (left <= right) {
    const minHeight = Math.min(height[left], height[right]);
    const x = right - left;
    const volume = minHeight * x;
    res = Math.max(res, volume);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

export {};
