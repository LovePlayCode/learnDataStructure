/**
 * 子集和(需考虑重复元素，可能有多余子集)需要去重
 * 链接: https://www.hello-algo.com/chapter_backtracking/subset_sum_problem/#1332
 */
function subsetSumII(nums: number[], target: number): number[][] {
  const len = nums.length;
  // 结果数组
  const res: number[][] = [];
  // 数组排序
  nums.sort((a, b) => a - b);
  // dfs
  const dfs = (start: number, total: number, state: number[]) => {
    if (total === target) {
      res.push([...state]);
      return;
    }
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      if (nums[i] + total > target) {
        continue;
      }
      state.push(nums[i]);
      dfs(i, total + nums[i], state);
      state.pop();
    }
  };
  dfs(0, 0, []);
  // 返回结果
  return res;
}

const res = subsetSumII([4, 4, 5], 9);
console.log("结果为::", res);

export {};
