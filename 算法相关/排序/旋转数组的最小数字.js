/**
 *
 * @param {number[]} arr
 */
function findRotateMinVal(arr) {
  const len = arr.length - 1;
  let i = 0;
  let j = len;

  // 因为有翻转0 数组的存在，相当于没翻转，那最小元素为 0

  if (arr[i] < arr[j]) {
    return i;
  }
  while (i < j) {
    const mid = Math.floor(i + (j - i) / 2);

    // 如果当前mid 处于第一个递增子序列中，需要移动左指针指向mid
    if (arr[i] <= arr[mid]) {
      i = mid;
    }

    if (arr[mid] <= arr[j]) {
      j = mid;
    }
    if (j - i === 1) {
      break;
    }
  }
  return j;
}
const res = findRotateMinVal([1, 0, 1, 1, 1]);
console.log(res);
