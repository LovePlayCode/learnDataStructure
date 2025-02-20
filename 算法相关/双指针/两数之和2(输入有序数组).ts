/**
 * 两数之和 2
 * leetcode: https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */
function twoSum(numbers: number[], target: number): number[] {
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

// case [2,2] 4 题目说了不能使用重复元素，但是这个例子是可以过的，说明数组本身是没有重复元素的
const res = twoSum([2, 2], 4);
console.log(res);
export {};
