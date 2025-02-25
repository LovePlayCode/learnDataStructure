function subsetSumI(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
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
        break;
      }

      state.push(nums[i]);
      dfs(i, state, total + nums[i], target);
      state.pop();
    }
  };
  dfs(0, [], 0, target);
  return res;
}

function combinationSum(candidates: number[], target: number): number[][] {
  return subsetSumI(candidates, target);
}
export {};
