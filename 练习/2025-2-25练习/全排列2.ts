function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  const len = nums.length;
  const vis = new Array(len).fill(false);
  const dfs = (nums: number[], state: number[]) => {
    if (state.length === nums.length) {
      res.push([...state]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (vis[i] === true) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) {
        continue;
      }
      state.push(nums[i]);
      vis[i] = true;
      dfs(nums, state);
      state.pop();
      vis[i] = false;
    }
  };
  dfs(nums, []);
  return res;
}
console.log(permuteUnique([1, 1, 2]));
export {};
