/**
 *
 * @param {number[]} nums
 * 最好情况下，要排序的数据是有序的，只需要进行一次冒泡操作，所以最好情况是O(n)
 *
 */
function bubblingSort(nums) {
  if (nums.length < 1) {
    return;
  }
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // console.log(nums[j],nums[j+1]);
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log(nums);
}

/**
 * 最好情况下的冒泡排序 因为只需要进行一轮冒泡 为O(n)
 * 最坏 O(n^2) 假设是完全倒序。
 */
function bubblingSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    // 标志位，标志 是否发生了交换
    let flag = false;
    for (let j = 0; j <= n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        flag = true;
      }
    }
    // 如果在第一轮冒泡的时候发现没有进行数据交换， 说明本身就是有序的，不需要继续进行冒泡；
    if (!flag) {
      break;
    }
  }
}

bubblingSort([3, 5, 4, 1, 2, 6]);
