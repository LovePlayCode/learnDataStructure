var reversePairs = function (record) {
  let count = 0;
  /**
   * 归并排序
   * @param {number[]} nums
   * @param {number} left
   * @param {number} right
   */
  function mergeNumber(nums, left, right) {
    if (left >= right) {
      return;
    }

    const mid = (left + right) >> 1;
    mergeNumber(nums, left, mid);
    mergeNumber(nums, mid + 1, right);
    merge(nums, left, mid, right);
  }

  /**
   * @param {number[]} nums
   * @param {number} left
   * @param {number} mid
   * @param {number} right
   */
  function merge(nums, left, mid, right) {
    const n = nums.length;
    let i = left;
    let j = mid + 1;
    let temp = [];
    let k = 0;
    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        temp.push(nums[i]);
        i++;
      } else {
        count += mid - i + 1;
        temp.push(nums[j]);
        j++;
      }
    }
    while (i <= mid) {
      temp.push(nums[i++]);
    }

    while (j <= right) {
      temp.push(nums[j++]);
    }

    for (let l1 = left, t = 0; l1 <= right; l1++, t++) {
      nums[l1] = temp[t];
    }
    temp = null;
  }

  mergeNumber(record, 0, record.length - 1);
  return count;
};

const nums = [7, 5, 6, 4];
console.log(reversePairs(nums));
console.log(nums);
