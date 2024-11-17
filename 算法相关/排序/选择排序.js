/**
 *
 * @param {number[]} nums
 * 1. 选择排序,进行位置的交换
 */
function selectionSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] <= nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}
const mySortArr = selectionSort([3, 5, 4, 1, 2, 6]);
console.log(mySortArr);
