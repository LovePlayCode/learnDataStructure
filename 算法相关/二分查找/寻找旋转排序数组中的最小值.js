/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/solutions/698479/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
 */
var findMin = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    const midVal = nums[mid];
    if (midVal < nums[right]) {
      // mid 有可能是最小值，所以要将 right 赋值为 mid
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
