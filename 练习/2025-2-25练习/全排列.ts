function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const len = nums.length;
  const dfs = (nums: number[], start: number) => {
    if (start === len) {
      res.push([...nums]);
      return;
    }
    for (let i = start; i < len; i++) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      dfs(nums, start + 1);
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  };
  dfs(nums, 0);
  return res;
}
console.log(permute([1, 2, 3]));
export {};
