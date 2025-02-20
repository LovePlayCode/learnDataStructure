/**
 * 两数之和 2
 * leetcode: https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */
function twoSum(numbers: number[], target: number): number[] {
  const len = numbers.length;
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const num = numbers[left] + numbers[right];
    if (num === target) {
      return [left + 1, right + 1];
    } else if (num < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
export {};
