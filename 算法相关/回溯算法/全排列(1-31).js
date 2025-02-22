/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const len = nums.length;
  // 结果数组
  const res = [];
  /**
   *
   * @param {number[]} state
   * @param {number[]} nums
   */
  function recursion(start) {
    if (start === len) {
      res.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]]; // 交换
      recursion(start + 1); // 递归
      [nums[start], nums[i]] = [nums[i], nums[start]]; // 回溯
    }
  }

  recursion(0);
  return res;
};

permute([1, 2, 3]);
