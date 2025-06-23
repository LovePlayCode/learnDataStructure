function findMaxAverage(nums: number[], k: number): number {
  const len = nums.length;
  let sum = 0;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let left = 0; left < len; left++) {
    sum = sum + nums[left];

    if (left < k - 1) {
      continue;
    }

    ans = Math.max(ans, sum / k);
    // this must write Otherwise  Array out of bounds
    const out = left - k + 1;
    sum = sum - nums[out];
  }
  return ans;
}

export {};
