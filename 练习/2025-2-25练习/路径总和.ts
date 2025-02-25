/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const res: number[][] = []
    const dfs = (root, total, state) => {
        if (root === null || root === undefined) {
            return
        }

        state.push(root.val)

        const newTotal = total + root.val
        // 检查是否满足最后一个节点
        if (root.left === null && root.right === null) {
            // 检查是否满足条件，如果满足条件，直接 push
            if (newTotal === targetSum) {
                res.push([...state])
            }
            // 同时将当前元素 pop，结束递归
            state.pop()
            return
        }
        dfs(root.left, newTotal, state)
        dfs(root.right, newTotal, state)
        state.pop()
    }
    dfs(root, 0, [])
    return res
};
export { }