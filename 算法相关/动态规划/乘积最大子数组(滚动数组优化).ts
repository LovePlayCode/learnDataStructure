function maxProduct(nums: number[]): number {
  const len = nums.length;
  let maxProd = nums[0];
  let minProd = nums[0];
  let res = nums[0];
  for (let i = 1; i < len; i++) {
    let temp = maxProd;
    // 如果是正数情况，需要尽可能大
    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    // 如果是负数情况，需要尽可能小
    minProd = Math.min(nums[i], temp * nums[i], minProd * nums[i]);
    res = Math.max(res, maxProd);
  }
  return res;
}

export {};
