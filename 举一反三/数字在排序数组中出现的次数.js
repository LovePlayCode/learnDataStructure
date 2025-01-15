/**
 *
 * @param {number[]} nums
 */
function GetFirstK(nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  //   while(){}
  const mid = (left + right) >> 1;
  while (left <= right) {
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
      // 找到 当前target 的索引位置，在左右两边顺序遍历，找到对应值。
    } else {
      let start = 0;
      let end = 0;
      for (let i = left; i < mid; i++) {
        if (nums[i] === target) {
          start = i;
          break;
        }
      }
      for (let i = right; i > mid; i--) {
        if (nums[i] === target) {
          end = i;
          break;
        }
      }

      return end - start + 1;
    }
  }
}

const nums = GetFirstK([1, 2, 3, 3, 3, 3, 4, 5], 3);
console.log(nums);
