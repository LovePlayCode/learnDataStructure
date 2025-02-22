/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const len = arr.length;
  if (len < 2) {
    return 1;
  }

  let left = 0;
  let right = 1;
  // 递增为 true，递减为 false
  let pre = false;
  let res = 0;
  while (right < len) {
    // 计算出当前相比于上个元素是增加状态还是减少状态
    const curr = arr[right - 1] < arr[right];
    if (right === 1 || curr === pre) {
      left = right - 1;
    }
    // 判断上一个元素是否等于当前元素
    if (arr[right - 1] === arr[right]) {
      left = right;
    }
    // 为什么要加呢，比如有这样一个场景[9,4,2,10] 当前 right的索引为 3，right - left 其实是一个闭区间 还需要+1
    // 那如果移动之后，就变成开区间，就不需要+1 了
    right++;
    res = Math.max(right - left, res);
    pre = curr;
  }
  return res;
};

maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
