/**
 *
 * 子集
 * leetcode: https://leetcode.cn/problems/subsets/
 */
function subsets(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  const dfs = (start: number, subset: number[]) => {
    res.push([...subset]);
    console.log(subset);
    for (let i = start; i < len; i++) {
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  };
  dfs(0, []);
  return res;
}

// 思路 2，一层一层执行
function subsets2(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [[]];
  const dfs = (start: number, state: number[], count: number) => {
    if (state.length === count) {
      res.push([...state]);
      return;
    }
    for (let i = start; i < len; i++) {
      state.push(nums[i]);
      dfs(i + 1, state, count);
      state.pop();
    }
  };
  for (let i = 1; i <= len; i++) {
    dfs(0, [], i);
  }
  return res;
}
const res = subsets([1, 2, 3]);
console.log(res);
export {};
