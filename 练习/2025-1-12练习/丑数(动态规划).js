function main(n) {
  const dp = new Array(n);
  dp[0] = 1;
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  for (let i = 1; i < n; i++) {
    const val2 = dp[p2] * 2;
    const val3 = dp[p3] * 3;
    const val5 = dp[p5] * 5;
    dp[i] = Math.min(val2, val3, val5);
    if (dp[i] === val2) {
      p2++;
    }
    if (dp[i] === val3) {
      p3++;
    }
    if (dp[i] === val5) {
      p5++;
    }
  }
  return dp[dp.length - 1];
}

const res = main(10);
console.log(res);
