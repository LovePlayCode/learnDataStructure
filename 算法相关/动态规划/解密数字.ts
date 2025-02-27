function crackNumber(ciphertext: number): number {
  const str = ciphertext + "";
  const len = str.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    // 当前的解密效果由上一个字符串的解密+当前的组成
    dp[i] = dp[i - 1];
    // 判断两个的情况下是否可以组成
    const currNum =
      10 * (str[i - 1].charCodeAt(0) - "0".charCodeAt(0)) +
      (str[i].charCodeAt(0) - "0".charCodeAt(0));
    if (currNum > 9 && currNum < 26) {
      if (i - 2 < 0) {
        dp[i]++;
      } else {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[len - 1];
}

export {};
