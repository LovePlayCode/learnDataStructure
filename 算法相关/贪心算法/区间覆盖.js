/**
 *
 * @param {number[][]} intervals
 */
function maxNonOverlappingIntervals(intervals) {
  if (intervals.length === 0) {
    return 0;
  }
  // 按结束点升序排序，如果结束点相同，按起始点升序
  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  // 定义一些变量用于标识状态，分别为：1. 已选择的区间数、2. 上一个选择的区间的结束点、
  let end = -Infinity;
  let count = 0;
  const arr = [];
  // 迭代，判断当前选择的l是否大于等于上一轮选择的 end，如果满足条件，即可以选择，如果不满足条件，移动下一步即可
  for (const [l, r] of intervals) {
    if (l >= end) {
      count++;
      arr.push([l, r]);
      end = r;
    }
  }
  console.log(arr);
  return count;
}

// 示例用法
const intervals = [
  [6, 8],
  [2, 4],
  [3, 5],
  [1, 5],
  [5, 9],
  [8, 10],
];

console.log(maxNonOverlappingIntervals(intervals)); // 输出：4
