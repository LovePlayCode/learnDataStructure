/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 
示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 */

/**
 *
 * @param {number[]} nums
 */
function main(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("类型错误");
  }
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    const curPrice = nums[i];
    // while(){}
    for (let j = i + 1; j < len - 1; j++) {
      if (nums[j] > curPrice) {
        const profit = nums[j] - curPrice;
        if (map.has(curPrice)) {
          const curProfit = map.get(curPrice);
          if (profit > curProfit) {
            map.set(curPrice, profit);
          }
        } else {
          map.set(curPrice, profit);
        }
      }
    }
  }
  let sum = 0;
  for (let val of map.values()) {
    sum = Math.max(val, sum);
  }
  return sum;
}
const res = main([7, 1, 5, 3, 6, 4]);
// console.log(res);

/**
 *
 * @param {number[]} nums
 */
function main2(nums) {
  const len = nums.length;
  let l1 = 0;
  let l2 = 1;
  let sum = 0;
  if (len === 1) {
    return nums[0];
  }
  while (l2 < len && l1 < len) {
    // if(){}
    if (nums[l1] < nums[l2]) {
      sum = Math.max(nums[l2] - nums[l1], sum);
      l2++;
    } else if (nums[l1] === nums[l2]) {
      l2++;
    } else {
      l1 = l2;
      l2++;
    }
  }
  return sum;
}

const res1 = main2([2, 1, 2, 1, 0, 1, 2]);
console.log(res1);
