/**
 * 三数之和
 * leetcode: https://leetcode.cn/problems/3sum-closest/
 */
function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  // 排序原数组
  nums.sort((a, b) => a - b);
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n - 2; i++) {
    // 如果有重复的元素，直接跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const targetNum = nums[left] + nums[right] + nums[i];
      res =
        Math.abs(targetNum - target) < Math.abs(res - target) ? targetNum : res;
      //   if(Math.abs(targetNum - target)){}
      if (targetNum > target) {
        right--;
      } else if (targetNum < target) {
        left++;
      } else {
        return targetNum;
      }
    }
  }
  return res;
}

// case1: [-1,2,1,-4]
// case2: [0,0,0]
export {};
