/**
 * 组合
 * leetcode: https://leetcode.cn/problems/combinations/description/
 */
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const dfs = (start: number, state: number[]) => {
    if (state.length === k) {
      res.push([...state]);
      return;
    }
    for (let i = start; i <= n; i++) {
      state.push(i);
      dfs(i + 1, state);
      state.pop();
    }
  };
  dfs(1, []);
  return res;
}

const res = combine(4, 2);
console.log("res==", res);
export {};
