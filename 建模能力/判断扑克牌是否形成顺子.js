/**
 * @param {number[]} nums
 * @param {number} length
 */
function Iscountinuous(nums, length) {
  if (!Array.isArray(nums)) {
    return false;
  }

  // 先排序
  const sortNums = nums.sort((a, b) => a - b);
  let numberOfZeor = 0;
  let numnerOfGap = 0;
  // 找 0
  for (let i = 0; i < length; i++) {
    if (sortNums[i] === 0) {
      numberOfZeor++;
    } else {
      break;
    }
  }
  let small = numberOfZeor;
  let big = small + 1;
  while (big < length) {
    // 说明是一个对子，不可能相等，直接返回 false
    if (sortNums[small] === sortNums[big]) {
      return false;
    }
    numnerOfGap += sortNums[big] - sortNums[small] - 1;

    // 交换两个变量的索引，滚动前进
    small = big;
    big++;
  }
  return numnerOfGap <= numberOfZeor ? true : false;
}
