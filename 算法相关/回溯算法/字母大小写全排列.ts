function letterCasePermutation(s: string): string[] {
  const len = s.length;
  const res: string[] = [];
  const dfs = (start: number, str: string) => {
    if (start === len) {
      if (str.length === len) {
        res.push(str);
      }

      return;
    }
    for (let i = start; i < len; i++) {
      const char = s[i];
      // 先去转换小写
      if (char >= "0" && char <= "9") {
        dfs(i + 1, str + char.toLowerCase());
      } else {
        dfs(i + 1, str + char.toLowerCase());
        dfs(i + 1, str + char.toUpperCase());
      }
    }
  };
  dfs(0, "");
  return res;
}

export {};
