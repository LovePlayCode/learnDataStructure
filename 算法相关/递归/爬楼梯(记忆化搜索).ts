/**
 *
 * 爬楼梯，记忆化搜索(典型的空间换时间) 利用一个数组或其他方式存储计算出来的值，达到缓存的目的。
 * leetcode: https://leetcode.cn/problems/climbing-stairs/submissions/603733066/
 */
function climbStairs(n: number): number {
  const memo = new Array(n + 1).fill(0);

  const dfs = (n: number, memo: number[]) => {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    if (memo[n] !== 0) {
      return memo[n];
    }
    const count = dfs(n - 1, memo) + dfs(n - 2, memo);
    memo[n] = count;
    return count;
  };
  return dfs(n, memo);
}
export {};
