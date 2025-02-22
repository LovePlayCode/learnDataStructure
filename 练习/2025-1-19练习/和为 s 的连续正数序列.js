/**
 * 输入一个正数s，打印出所有和为：的连续正数序列（至少含有两个数）。例如输入15，
 * 由于1+2+3+4+5 ｜ 4+5+6 ｜ 7+8=15，所以结果打印出3个连续序列1～5、4～6和7～8。
 * @param {number} s
 * @returns
 */
function findContinuousSequence(s) {
  // 将 s 变为一个数组
  const nums = [null];
  for (let start = 1; start <= s; start++) {
    nums.push(start);
  }
  let start = 1;
  let end = 2;
  let sum = start + end;
  const midIndex = (s + 1) >> 1;
  const result = [];
  while (start < midIndex) {
    if (sum === s) {
      result.push(nums.slice(start, end + 1));
    }
    while (sum > s && start < midIndex) {
      sum -= start;
      start++;
      if (sum === s) {
        result.push(nums.slice(start, end + 1));
      }
    }
    end++;
    sum += end;
  }
  return result;
}
console.log(findContinuousSequence(15));
// 测试
