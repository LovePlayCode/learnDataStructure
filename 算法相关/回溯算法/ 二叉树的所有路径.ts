class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * 二叉树所有路径
 * leetcode: https://leetcode.cn/problems/binary-tree-paths/description/
 */
function binaryTreePaths(root: TreeNode | null): string[][] {
  const res: string[][] = [];
  function preOrder(root: TreeNode | null, list: number[]) {
    // const list = []
    if (root === null) {
      return null;
    }

    list.push(root.val);
    if (root.left === null && root.right === null) {
      res.push([...list]);
    }
    preOrder(root.left, list);
    preOrder(root.right, list);
    list.pop();
  }
}

export {};
