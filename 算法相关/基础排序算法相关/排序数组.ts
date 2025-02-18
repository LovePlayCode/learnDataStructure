function sortArray(nums: number[]): number[] {
  function quickSort(nums: number[], left: number, right: number) {
    // 终止条件
    if (left >= right) {
      return;
    }
    // 比分界点小的都放到左边，分界点大的都放到右边，分界点在中间
    function partition(nums: number[], left: number, right: number) {
      let i = left;
      let j = left;
      const pivot = nums[right];
      while (j < right) {
        if (nums[j] <= pivot) {
          // 交换位置，保证pivot的左侧是比他小的
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
        }
        j++;
      }
      [nums[i], nums[right]] = [nums[right], nums[i]];
      return i;
    }
    // 分区函数
    const pivot = partition(nums, left, right);
    // 处理左边
    quickSort(nums, left, pivot - 1);
    // 处理右边
    quickSort(nums, pivot + 1, right);
  }

  quickSort(nums, 0, nums.length - 1);
  return nums;
}
const nums = [1, 5, 6, 99, 38, 23233, 2, 3, 4];
const arr = sortArray(nums);
console.log(arr);
export {};
