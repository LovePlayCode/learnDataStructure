function lengthOfLIS(nums) {
  const len = nums.length;
  const memo = new Array(len).fill(0);
  const dfs = (length) => {
    if (memo[length] > 0) {
      return memo[length];
    }
    for (let j = 0; j < length; j++) {
      if (nums[j] < nums[length]) {
        // 1,2,3,1,4
        memo[length] = Math.max(memo[length], dfs(j));
      }
    }
    return ++memo[length];
  };
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans = Math.max(ans, dfs(i));
  }
  return ans;
}
console.log(lengthOfLIS([1, 2, 3, 1, 4]));
