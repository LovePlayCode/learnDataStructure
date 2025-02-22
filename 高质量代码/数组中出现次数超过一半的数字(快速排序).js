function majorityElement(nums) {
  function partition(arr, left, right) {
    const basisVal = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j] <= basisVal) {
        // 交换位置, i的元素可能是大于当前元素的值，所以需要交换
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
      j++;
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
  function quickSelect(arr, left, right, targetIndex) {
    const index = partition(arr, left, right);
    if (index === targetIndex) {
      return arr[index];
    } else if (index < targetIndex) {
      return quickSelect(arr, index + 1, right, targetIndex);
    } else {
      return quickSelect(arr, left, index - 1, targetIndex);
    }
  }
  const mid = nums.length >> 1;

  const res = quickSelect(nums, 0, nums.length - 1, mid);
  return res;
}
// 测试
const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(arr)); // 输出 2
const arr2 = [7];
console.log(majorityElement(arr2)); // 输出: 7
const arr3 = [3, 3, 3, 3, 3];
console.log(majorityElement(arr3)); // 输出: 3
