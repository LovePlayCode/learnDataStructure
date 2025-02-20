function subsetSumI(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  const dfs = (
    start: number,
    state: number[],
    total: number,
    target: number
  ) => {
    if (total === target) {
      res.push([...state]);
    }
    for (let i = start; i < len; i++) {
      if (total + nums[i] > target) {
        continue;
      }

      state.push(nums[i]);
      dfs(i, state, total + nums[i], target);
      state.pop();
    }
  };
  dfs(0, [], 0, 9);
  return res;
}

const res = subsetSumI([3, 4, 5], 9);
console.log("结果为::", res);

export {};
