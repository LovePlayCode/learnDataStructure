/**
 * 回溯函数
 * @param {number[]} state
 * @param {number[]} choices
 * @param {number[]} res
 */
function backtrack(state, res, choices, selected) {
  if (state.length === 3) {
    res.push([...state]);
    return;
  }
  // 对它进行选择
  for (const [index, choice] of choices.entries()) {
    // 剪枝
    if (selected[index]) {
      continue;
    }
    // 选择
    state.push(choice);
    selected[index] = true;
    // 递归
    backtrack(state, res, choices, selected);
    // 回退
    state.pop();
    selected[index] = false;
  }
}

/**
 *
 * @param {number[]} nums
 */
function main(nums) {
  const state = [];
  const res = [];
  // 由于每次递归都会选择重复的元素，可以定义一个selected, 防止重复push
  const selected = Array.from({ length: nums.length }).fill(false);
  backtrack(state, res, nums, selected);
  return res;
}
for (let i = 1; i <= 1; i++) {
  const arr = new Array(9).fill(0).map((i, index) => {
    return index + 1 + "";
  });
  console.log(arr);
  const res = main(arr);
  console.log(res);
}
const resData = main([1, 2, 3]);
console.log("resData===", resData);

/**
 * 递归
 * 1. 递归的结束条件
 * 2. 要处理哪些数据
 */
