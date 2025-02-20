/**
 * 选或不选的解法
 * 建议看看 liweiwei 题解: https://www.bilibili.com/video/BV147411A7Yq/?p=2
 */
function subsets(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  const dfs = (index: number, stack: number[]) => {
    if (index === len) {
      res.push([...stack]);
      return;
    }
    dfs(index + 1, stack);
    stack.push(nums[index]);
    dfs(index + 1, stack);
    stack.pop();
  };
  dfs(0, []);
  return res;
}
const nums = [1, 2, 3];
const res = subsets(nums);
console.log(res);
export {};
