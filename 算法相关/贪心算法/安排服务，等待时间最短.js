function minimizeWaitingTime(serviceTimes) {
  // 按服务时间从小到大排序
  serviceTimes.sort((a, b) => a - b);

  let totalWaitingTime = 0; // 总等待时间
  let cumulativeTime = 0; // 累积服务时间

  // 遍历服务时间数组
  for (let time of serviceTimes) {
    totalWaitingTime += cumulativeTime; // 累加当前的等待时间
    cumulativeTime += time; // 更新累积服务时间
  }

  return totalWaitingTime;
}
// 示例 1
let serviceTimes1 = [2, 3, 1];
console.log(minimizeWaitingTime(serviceTimes1)); // 输出: 4

// 示例 2
let serviceTimes2 = [5, 2, 1];
console.log(minimizeWaitingTime(serviceTimes2)); // 输出: 6

// 示例 3
let serviceTimes3 = [4, 3, 2, 1];
console.log(minimizeWaitingTime(serviceTimes3)); // 输出: 10
