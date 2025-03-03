/**
 * 选或不选的解法
 * 进行子集的操作的时候，总共有两种操作:
 * 1. 选择当前元素，继续
 * 2. 不选当前元素，继续。 所以需要选择或不选
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
    // 不选
    dfs(index + 1, stack);
    // 选
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
