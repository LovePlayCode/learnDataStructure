function lengthOfLIS(nums) {
  const len = nums.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  let ans = 1;
  console.log(len);

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    ans = Math.max(ans, ++dp[i]);
  }
  return ans;
}
