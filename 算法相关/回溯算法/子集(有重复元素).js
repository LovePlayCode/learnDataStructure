/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [[]];

  // 先对元素进行排序,重复的元素就到一起了。
  nums.sort((a, b) => a - b);
  /**
   *
   * @param {number[]} state
   * @param {number} tier
   */
  function recursion(state, start, tier) {
    if (state.length === tier) {
      res.push([...state]);
      return;
    }
    if (start >= nums.length) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      //
      if (i > 0 && i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      state.push(nums[i]);
      recursion(state, i + 1, tier);
      state.pop();
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    recursion([], 0, i);
  }

  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
