/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const selected = Array.from({ length: nums.length }).fill(false);

  const state = [];
  const res = [];
  nums.sort((a, b) => a - b);

  backtrack(0, state, res, nums, selected);
  //   const num = state.reduce((pre, cur) => {
  //     return pre + cur;
  //   }, 0);

  return res;
};

/**
 *
 * @param {number[]} state
 * @param {number[][]} res
 * @param {number[]} choices
 * @param {number[]} selected
 */
function backtrack(start, state, res, choices, selected) {
  if (state.length === 3) {
    const num = state.length
      ? state.reduce((pre, cur) => {
          return pre + cur;
        })
      : -1;
    if (num === 0) {
      res.push([...state]);
      return;
    }
    return;
  }
  for (let i = start; i < choices.length; i++) {
    let choice = choices[i];
    // 判断是否需要剪枝条
    // if (0 - choices[i] < 0) {
    //   break;
    // }
    // 剪枝四：如果该元素与左边元素相等，说明该搜索分支重复，直接跳过
    if (i > start && choices[i] === choices[i - 1]) {
      continue;
    }
    // 剪枝2：提前停止搜索（因为数组已排序，如果当前数大于0，和不可能为0）
    if (nums[i] > 0 && sum + nums[i] > 0) break;
    state.push(choice);
    // 选过了

    backtrack(i + 1, state, res, choices, selected);
    state.pop();
  }
}
const res = threeSum([-1, 0, 1, 2, -1, -4]);
console.log("res==", res);
