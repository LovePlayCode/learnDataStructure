/**
 * 用一条语句判断一个整数是不是 2的整数次方
 * @param {number} n
 * @returns
 */
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
