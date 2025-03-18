function maxProduct(nums: number[]): number {
  const len = nums.length;
  const maxProd = new Array(len).fill(0);
  const minProd = new Array(len).fill(0);
  maxProd[0] = nums[0];
  minProd[0] = nums[0];
  let res = nums[0];
  // 有正数乘积和负数乘积
  for (let i = 1; i < len; i++) {
    maxProd[i] = Math.max(
      nums[i],
      nums[i] * maxProd[i - 1],
      nums[i] * minProd[i - 1]
    );
    minProd[i] = Math.min(
      nums[i],
      nums[i] * maxProd[i - 1],
      nums[i] * minProd[i - 1]
    );
    res = Math.max(res, maxProd[i]);
  }
  return res;
}

export {};
