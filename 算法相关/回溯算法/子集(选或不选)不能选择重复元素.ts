function subsetsWithDup(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const dfs = (start: number, subset: number[]) => {
    res.push([...subset]);
    for (let i = start; i < len; i++) {
      // 剪枝的条件...
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  };
  dfs(0, []);
  return res;
}
const nums = [1, 2, 2];
const res = subsetsWithDup(nums);
console.log(res);
export {};
