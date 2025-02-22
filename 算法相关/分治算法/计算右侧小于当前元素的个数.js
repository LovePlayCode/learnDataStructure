/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const res = new Array(nums.length).fill(0);

  // 排序原始数组的索引
  const indicies = nums.map((_, i) => i);
  /**
   *
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   */
  function merge_sort_c(nums, left, right) {
    if (left >= right) {
      return;
    }
    const mid = (left + right) >> 1;

    merge_sort_c(nums, left, mid);
    merge_sort_c(nums, mid + 1, right);
    merge(nums, left, mid, right);
  }

  /**
   *
   * @param {number[]} nums
   * @param {number} left
   * @param {number} mid
   * @param {number} right
   */
  function merge(nums, left, mid, right) {
    let l = left;
    let j = mid + 1;
    const temp = [];

    // 填充数组
    while (l <= mid && j <= right) {
      if (nums[indicies[l]] <= nums[indicies[j]]) {
        temp.push(indicies[l]);
        res[indicies[l]] += j - mid - 1;
        l++;
      } else {
        temp.push(indicies[j]);

        j++;
      }
    }

    // 元素可能有剩余的值，依次遍历即可

    while (l <= mid) {
      res[indicies[l]] += j - mid - 1;
      temp.push(indicies[l++]);
    }

    while (j <= right) {
      temp.push(indicies[j++]);
    }

    // 将数组合并到原数组中

    for (let i = left, t = 0; i <= right; i++, t++) {
      indicies[i] = temp[t];
    }
  }
  merge_sort_c(nums, 0, nums.length - 1);
  console.log(indicies);
  return res;
};

const nums = [5, 2, 6, 1];

console.log("nums==", countSmaller(nums));
