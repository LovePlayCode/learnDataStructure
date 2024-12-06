/**
 * 纸币找零问题
 * @param {number} K
 * @param {number[]} denominations
 * @param {number} counts
 */
function minCoinsForPayment(K, denominations, counts) {
  const sortDenominat = denominations
    .map((item, index) => {
      return {
        value: item,
        count: counts[index],
      };
    })
    .sort((a, b) => b.value - a.value);
  let minCoins = 0;
  for (const { value, count } of sortDenominat) {
    if (K <= 0) {
      break;
    }

    // 计算当前可以用多少张最大纸币的数量
    const useCount = Math.min(Math.floor(K / value), count);
    minCoins += useCount;
    K -= useCount * value;
  }
  return K === 0 ? minCoins : -1;
}

// 示例用法
const denominations = [1, 2, 5, 10, 20, 50, 100]; // 面额
const counts = [5, 2, 2, 1, 1, 3, 0]; // 每种面额的数量
const K = 129; // 需要支付的金额

console.log(minCoinsForPayment(K, denominations, counts)); // 输出：6
