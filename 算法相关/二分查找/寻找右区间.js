/**
 *
 * @param {number[][]} intervals
 * https://leetcode.cn/problems/find-right-interval/
 */
var findRightInterval = function (intervals) {
  const len = intervals.length;
  const startIntervals = new Array(len).fill(0).map((item) => {
    return new Array(2).fill(0);
  });

  // startIntervals[i][0]存放的是开始元素
  // startIntervals[i][1] 存放的是索引
  for (let i = 0; i < len; i++) {
    startIntervals[i][0] = intervals[i][0];
    startIntervals[i][1] = i;
  }

  // 排序
  startIntervals.sort((o1, o2) => o1[0] - o2[0]);
  const ans = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    let left = 0;
    let right = len - 1;
    let target = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      // 满足条件。但是要找区间最小的，所以还要划分
      if (startIntervals[mid][0] >= intervals[i][1]) {
        right = mid - 1;
        target = startIntervals[mid][1];
      } else {
        left = mid + 1;
      }
    }
    ans[i] = target;
  }
  return ans;
};
