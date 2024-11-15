/**
 *
 * @param {number[]} nums
 */
function insertSort(nums) {
  const n = nums.length;
  if (n <= 1) {
    return;
  }

  for (let i = 1; i < n; i++) {
    const val = nums[i];
    // i 是待排序的， i-1 是已经排序好的区间。 需要将 i-1的元素进行移动，给 i 元素腾出空间。
    let j = i - 1;
    while (j >= 0) {
      if (nums[j] > val) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
      j--;
    }
    // 已经腾出空间，直接放入即可。 因为进行了 j-- 所以需要 j+1 进行放置
    nums[j + 1] = val;
  }

  console.log("nums==", nums);
}

insertSort([3, 5, 4, 1, 2, 6]);
