/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
   如果有多对数字的和等于s，输出任意一对即可。
 * @param {number[]} nums
 * @param {number} s
 */
function FindNumsWithSum(nums, s) {
  const len = nums.length;
  let right = len - 1;
  let left = 0;
  while (left < right) {
    const num1 = nums[left];
    const num2 = nums[right];
    if (num1 + num2 > s) {
      right--;
    } else if (num1 + num2 < s) {
      left++;
    } else {
      return [num1, num2];
    }
  }
  return [];
}

const res = FindNumsWithSum([1, 2, 3, 7, 9], 8);
console.log("res==", res);
