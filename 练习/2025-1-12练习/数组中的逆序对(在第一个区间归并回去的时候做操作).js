
/**
 * 可以看看 liweiwei 大佬的这个视频: https://www.bilibili.com/video/BV1YU4y1f7i4/?spm_id_from=333.999.list.card_archive.click 讲的非常好
 * leetcode链接: https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof/submissions/594485953/
 */
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
      // 当前nums[i] <= nums[j] 说明 nums[j]到 mid 之前的元素全部比nums[i]小，满足逆序对的定义
      if (nums[i] <= nums[j]) {
        temp.push(nums[i]);
        count += j - mid - 1
        i++;
      } else {
        // count += mid - i + 1;
        temp.push(nums[j]);
        j++;
      }
    }

    // 当循环结束之后，发现第一个区间的数据没走完，说明第二个区间的数据都比现在的数据小，还需要处理
    while (i <= mid) {
      temp.push(nums[i++]);
      count += j - mid - 1
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
export {};