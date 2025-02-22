/**
 *
 * @param {number[]} nums
 */
function FindGreatestSumOfSubArray(nums, n) {
  let sums = Number.MIN_SAFE_INTEGER;
  let currNum = nums[0];
  for (let i = 1; i < n; i++) {
    if (currNum <= 0) {
      currNum = nums[i];
    } else {
      currNum += nums[i];
    }
    sums = currNum > sums ? currNum : sums;
  }
  return sums;
}

const res = FindGreatestSumOfSubArray(
  [1, -2, 3, 10, -4, 7, 2, -5],
  [1, -2, 3, 10, -4, 7, 2, -5].length
);

console.log("结果为::", res);
