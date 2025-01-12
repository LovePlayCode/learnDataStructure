/**
 *
 * @param {number[]} nums
 */
function maxSubArray(nums) {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxNum = Math.max(dp[i], maxNum);
  }

  return maxNum;
}

const res = maxSubArray([1, -2, 3, 10, -4, 7, 2, -5]);
console.log("res==", res);
