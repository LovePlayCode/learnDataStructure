/**
 *
 *
 * 爬楼梯问题  动态规划
 */
function main(n) {
  const dfs = (i) => {
    if (i === 1 || i === 2) {
      return i;
    }
    const count = dfs(i - 1) + dfs(i - 2);
    return count;
  };
  return dfs(n);
}
const res = main(3);
console.log(res);
