/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let resMin = Number.MAX_VALUE;
  nums.sort((a, b) => a - b);
  const curLength = nums.length / 2;
  // 排序
  for (let i = 0; i < curLength; i++) {
    // 移动元素
    const min = nums.shift();
    const max = nums.pop();
    const temp = (min + max) / 2;
    resMin = Math.min(resMin, temp);
  }
  return resMin;

  // 记录最小值 并和 averages中第一个元素比较  保证averages中第一个元素永远是最小值
};
const res = minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]);
console.log("res==", res);
