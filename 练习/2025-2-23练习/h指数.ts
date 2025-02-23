/**
 * h指数指的是论文数量,找的是引用次数最多的情况，所以要往左边趋近。
 * leetcode: https://leetcode.cn/problems/h-index-ii/description/
 */
function hIndex(citations: number[]): number {
  let n = citations.length;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (citations[mid] >= n - mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(left);
  return n - left;
}
const res = hIndex([1, 3, 5, 7, 10, 13]);
console.log(res);
export {};
