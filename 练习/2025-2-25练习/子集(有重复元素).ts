function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const dfs = (nums: number[], start: number, state: number[]) => {
    res.push([...state]);
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      state.push(nums[i]);
      dfs(nums, i + 1, state);
      state.pop();
    }
  };
  dfs(nums, 0, []);
  return res;
}

console.log(subsetsWithDup([1, 2, 2]));
export {};
