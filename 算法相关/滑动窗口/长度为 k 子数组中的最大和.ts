function maximumSubarraySum(nums: number[], k: number): number {
  let ans = 0;
  let sum = 0;
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const left = i - k + 1;
    sum += nums[i];
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    // 说明还没有满足需要的长度
    if (left < 0) {
      continue;
    }
    if (map.size === k) {
      ans = Math.max(ans, sum);
    }
    // 因为满足了长度，左侧的元素需要进行移除
    const out = nums[left];
    sum -= out;
    const count = map.get(out);
    if (count > 1) {
      map.set(out, count - 1);
    } else {
      map.delete(out);
    }
  }
  return ans;
}

export {};
