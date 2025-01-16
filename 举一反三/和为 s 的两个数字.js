/**
 *
 * @param {number[]} nums
 * @param {number} s
 */
function FindNumsWithSum(nums, s) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const curNums = nums[left] + nums[right];
    if (curNums < s) {
      left++;
    } else if (curNums > s) {
      right--;
    } else {
      return [nums[left], nums[right]];
    }
  }
  return [];
}
const res = FindNumsWithSum([1, 2, 3, 7, 9], 8);
console.log("res==", res);
// [1,2,3,7,9] 8
// [-1, 0 ,1,2,3,7,9]
