/**
 * leetcode: https://leetcode.cn/problems/house-robber-iii/
 * 无后效性: 动态规划在解决子问题的过程中，一旦某一个子问题的求解结果确定以后，就不会再被修改。求解的过程形成了一张[有向无环图]
 * 题解: https://leetcode.cn/problems/house-robber-iii/
 */

var rob = function (root) {
  const dfs = (root) => {
    // 当前节点没值，直接返回[0, 0]
    if (!root) {
      return [0, 0];
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    const dp = new Array(2).fill(0);
    // 不偷当前节点， 左右子树都能偷，状态转移方程为: dp[0] = Math.max(left[0],left[1]) + Math.max(right[0],right[1])
    dp[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 偷当前节点,左右子树都不能偷。 状态转移方程为 dp[1] = root.val + left[0] + right[0]
    dp[1] = root.val + left[0] + right[0];
    return dp;
  };
  const res = dfs(root);
  // 从偷与不偷中选择最大值
  return Math.max(res[0], res[1]);
};
