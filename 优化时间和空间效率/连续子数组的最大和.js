/**
 *
 * @param {number[]} pData
 * @param {number} len
 */
function FindGreatestSumOfSubArray(pData, len) {
  let sum = Number.MIN_SAFE_INTEGER;
  // const baseVal = 0
  let nCurNum = 0;
  for (let i = 0; i < len; i++) {
    // 考虑索引为 0 或值全部为负数的情况，负数越加越小。 所以直接赋值即可
    if (nCurNum <= 0) {
      nCurNum = pData[i];
    } else {
      nCurNum += pData[i];
    }
    if (nCurNum > sum) {
      sum = nCurNum;
    }
  }
  return sum;
}
const res = FindGreatestSumOfSubArray(
  [1, -2, 3, 10, -4, 7, 2, -5],
  [1, -2, 3, 10, -4, 7, 2, -5].length
);
console.log(res);
