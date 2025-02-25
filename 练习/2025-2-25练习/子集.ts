function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  const dfs = (nums: number[], start: number, state: number[]) => {
    res.push([...state]);
    for (let i = start; i < len; i++) {
      state.push(nums[i]);
      dfs(nums, i + 1, state);
      state.pop();
    }
  };
  dfs(nums, 0, []);
  return res;
}
console.log(subsets([1, 2, 3]));
export {};
