/**
 *
 *
 * 爬楼梯问题  动态规划
 */
function main(n) {
  const mem = new Array(n + 1).fill(-1);
  const dfs = (i, mem) => {
    if (i === 1 || i === 2) {
      return i;
    }
    if (mem[i] !== -1) {
      return mem[i];
    }
    const count = dfs(i - 1) + dfs(i - 2);
    return count;
  };
  return dfs(n, mem);
}
const res = main(3);
console.log(res);
