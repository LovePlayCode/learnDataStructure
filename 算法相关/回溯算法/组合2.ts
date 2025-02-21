function subsetsWithDup(nums: number[]): number[][] {
  const n = nums.length;
  // 排序一下
  nums.sort((a, b) => a - b);
  const dfs = (start: number, state: number[], k: number) => {
    if (state.length === k) {
      res.push([...state]);
      return;
    }
    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      state.push(nums[i]);
      dfs(i + 1, state, k);
      state.pop();
    }
  };
  const res: number[][] = [];
  for (let i = 0; i <= n; i++) {
    dfs(0, [], i);
  }

  return res;
}
const res = subsetsWithDup([1, 2, 2]);
console.log("结果为::", res);
export {};
