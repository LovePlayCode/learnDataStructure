/**
 * 如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分进行排序，最后合并起来就是一个完好的排序数组。
 * 归并排序使用的是分治思想，将大问题分解为小问题，小问题解决了大问题也就解决了。
 * 分治是一种解决办法的思想，递归是一种编程技巧。
 */
let count = 0;

/**
 *
 * @param {number[]} nums
 * @param {number} n
 *  归并排序是稳定的排序算法， 因为会优先选择左边的元素，所以相对顺序是不变的。
 *  归并排序最好情况时间复杂度、最坏情况时间复杂度、平均时间复杂度都是O(nlogn)
 *  空间复杂度是 O(n) 因为每次需要一个 n 空间的数组来存储数据。
 */
function merge_sort(nums, n) {
  merge_sort_c(nums, 0, nums.length - 1);
  return nums;
}

// 递归函数
function merge_sort_c(A, p, r) {
  if (p >= r) {
    return;
  }
  const mid = Math.floor((p + r) / 2);

  // 先排序左边部分
  merge_sort_c(A, p, mid);
  // 排序右边部分
  merge_sort_c(A, mid + 1, r);
  // 合并
  merge(A, p, mid, r);
}

/**
 * 1. 合并两个数组
 * 2. 初始化一个 temp 数组， 初始化两个指针， 一个指向 left，一个指向 mid+1 如果nums[i] < nums[j]
 *    temp[k] = nums[i++]
 * 3. 可能会存在交换完之后，有数组剩余情况，这个时候就判断哪个数组有剩余，把剩余的数据放入temp 即可。
 * 4. 将 temp数组复制到 nums
 */
function merge(nums, p, mid, r) {
  const n = nums.length;
  let i = p;
  let j = mid + 1;
  let temp = new Array(n);
  let k = 0;

  while (i <= mid && j <= r) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      // 因为已经排好序了，所以当前的已经比后面的大了，后面的会更大，直接添加即可。
      temp[k++] = nums[j++];
      count += mid - i + 1;
    }
  }
  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= r) {
    temp[k++] = nums[j++];
  }
  for (let curIndex = p, t = 0; curIndex <= r; curIndex++, t++) {
    nums[curIndex] = temp[t];
  }
}

const res = merge_sort([7, 5, 6, 4]);
console.log(res, count);
