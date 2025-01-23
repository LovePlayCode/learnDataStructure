/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length;
  if (len < 2) {
    return;
  }

  // [0,p0) === 0
  // [p0,i) === 1
  // (p2,len-1] = 2
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
