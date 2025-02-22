/**
 * @param {number} ciphertext
 * @return {number}
 */
var crackNumber = function (ciphertext) {
  const str = ciphertext + "";
  const len = str.length;
  // dp[0,i]表示 s[0..i]能翻译的种类数,这个只是种类数，跟当前能否翻译无关
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    // 当前位置满足的结果一定可以由前一个位置满足的结果得出
    dp[i] = dp[i - 1];
    // 得到当前的值
    const currentNum =
      10 * (str[i - 1].charCodeAt() - "0".charCodeAt()) +
      (str[i].charCodeAt() - "0".charCodeAt());

    if (currentNum > 9 && currentNum < 26) {
      if (i - 2 < 0) {
        dp[i]++;
      } else {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[len - 1];
};
