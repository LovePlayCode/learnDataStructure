/**
 *
 * @param {number[]} state // 排序的数组
 * @param {*} target  // 需要匹配的目标元素
 * @param {number[]} choices // 需要匹配的数组
 * @param {*} start  // 开始索引
 * @param {*} res  // 结果数组
 * @returns
 */
function backtrack(state, target, choices, start, res) {
  if (target === 0) {
    res.push([...state]);
    return;
  }
  // 从start开始
  for (let i = start; i < choices.length; i++) {
    // 剪枝情况1: 元素相加小于0
    if (target - choices[i] < 0) {
      break;
    }
    state.push(choices[i]);
    // 进行下一轮选择
    backtrack(state, target - choices[i], choices, i, res); // 回退:撤销选择，恢复到之前的状态
    state.pop();
  }
}

function subsetSumI(nums, target) {
  // 定义一个state
  const state = [];
  // 这个算法必须先进行排序，才可以，不然会有问题
  nums.sort((a, b) => a - b);
  const start = 0; // 遍历起始点
  const res = []; // 结果列表(子集列表) backtrack(state, target, nums, start, res);
  backtrack(state, target, nums, start, res); 
  return res;
}
const res = subsetSumI([3,4,5],9)
console.log('res==',res)