/**
 *
 * @param {number[]} g
 * @param {number[]} s
 */
function maxSatisfiedChildren(g, s) {
  // 对孩子需求大小排序
  g.sort((a, b) => a - b);
  // 对糖果大小排序
  s.sort((a, b) => a - b);
  // 定义当前孩子索引，糖果索引以及满足孩子的个数
  let satisfied = 0;
  let childIndex = 0;
  let candyIndex = 0;
  // 遍历，判断当前糖果需求是否满足孩子需求
  while (childIndex < g.length && candyIndex < s.length) {
    if (s[candyIndex] >= g[childIndex]) {
      childIndex++;
      satisfied++;
    }
    candyIndex++;
  }
  return satisfied;
}

// 示例用法
const childrenNeeds = [1, 2, 3]; // 孩子需求
const candies = [1, 3]; // 糖果大小

console.log(maxSatisfiedChildren(childrenNeeds, candies)); // 输出：1
