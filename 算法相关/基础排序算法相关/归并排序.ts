interface Fn {
  (numbers: number[], left: number, mid: number, right: number): void
}

function sortArray(nums: number[]): number[] {
  const len = nums.length;
  /**
   * 合并方法
   */
  function merge(numbers: number[], left: number, mid: number, right: number) {
    let i = left;
    let j = mid + 1;
    const temp: number[] = [];
    while (i <= mid && j <= right) {
      if (numbers[i] <= numbers[j]) {
        temp.push(numbers[i++]);
      } else {
        temp.push(numbers[j++]);
      }
    }

    while (i <= mid) {
      temp.push(numbers[i++]);
    }
    while (j <= right) {
      temp.push(numbers[j++]);
    }

    // 将 temp 的元素合并到原数组中
    for (let i = 0; i < temp.length; i++) {
      numbers[i + left] = temp[i];
    }
  }
  /**
   * 主的排序方法
   */
  function merge_sort(nums: number[], left: number, right: number) {
    if (left >= right) {
      return;
    }

    // 取中间数进行排序
    const mid = (left + right) >> 1;
    // 先排序左边
    merge_sort(nums, left, mid);
    // 然后排序右边
    merge_sort(nums, mid + 1, right);
    // 合并
    merge(nums, left, mid, right);
  }
  merge_sort(nums, 0, len - 1);
  return nums;
}
const nums = [1, 5, 6, 99, 38, 23233, 2, 3, 4];
const arr = sortArray(nums);
console.log(arr);
export { };
