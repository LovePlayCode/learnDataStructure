function letterCasePermutation(s: string): string[] {
  const len = s.length;
  const res: string[] = [];
  const dfs = (start: number, str: string) => {
    if (start === len) {
      res.push(str);
      return;
    }
    const char = s[start];
    if (char >= "0" && char <= "9") {
      dfs(start + 1, str + char.toLowerCase());
    } else {
      dfs(start + 1, str + char.toLowerCase());
      dfs(start + 1, str + char.toUpperCase());
    }
  };
  dfs(0, "");
  return res;
}
console.log(letterCasePermutation("a1b2"));
export {};
