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
    // 这个循环主要是从 i 开始，依次进行空间的转移。
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

// 插入排序是比较稳定的排序。因为对于值相同的元素，它是将待插入的元素插入到相同元素的后面，保持了相对位置。
function insertSortMy(nums) {
  const n = nums.length;
  if (n <= 1) {
    return;
  }
  let i = 1;
  while (i < n) {
    let j = i - 1;
    const val = nums[i];
    while (j >= 0) {
      if (nums[j] > val) {
        // 占了 i 本身的位置，所以不需要考虑 本身j+1的元素放哪里。  并且这里已经假定 i 之前的数据都是有序的。
        nums[j + 1] = nums[j];
      } else {
        break;
      }
      j--;
    }
    nums[j + 1] = val;
    i++;
  }
  return nums;
}
const mySortArr = insertSortMy([3, 5, 4, 1, 2, 6]);
console.log(mySortArr);
