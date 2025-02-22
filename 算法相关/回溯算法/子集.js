/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];

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
