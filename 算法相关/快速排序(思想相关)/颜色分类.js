/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 */
var sortColors = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return;
  }

  /**
   * 定义循环不变量相关
   *  编码的过程中要严格遵守循环不变量，避免出错
   * [0,p0) === 0 代表红色
   * [p0,i) === 1 代表白色
   * (p2,len-1] = 2 代表蓝色
   */
  let p0 = 0;
  let i = 0;
  let p2 = len - 1;

  while (i <= p2) {
    if (nums[i] === 0) {
      // 满足定义，所以需要先交换
      swap(nums, i, p0);
      i++;
      p0++;
    } else if (nums[i] === 1) {
      i++;
    } else {
      swap(nums, i, p2);
      p2--;
    }
  }
};

function swap(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}
