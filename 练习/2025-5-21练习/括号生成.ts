function generateParenthesis(n: number): string[] {
  let countArr: string[] = [];
  const dfs = (left, right, cur) => {
    if (left === 0 && right === 0) {
      countArr.push(cur);
      return;
    }
    if (right < left) {
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, cur + "(");
    }
    if (right > 0) {
      dfs(left, right - 1, cur + ")");
    }
  };
  dfs(n, n, "");
  return countArr;
}

export {};
