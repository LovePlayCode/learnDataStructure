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

/**
 * 树相关的定义
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * 分析过程
 * preorder 是树的先序遍历   inorder是树的中序遍历 如何构造一颗完整的二叉树？？
 * preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 3, [9] & [15,20,7]  20 , 15 ,7
 * 1. 前序遍历过程中第一个元素一定是根节点
 * 2. 通过根节点可以将中序遍历分割
 * 3. 通过中序遍历分割出来的数据再执行上诉操作。
 *
 *
 * @param preorder
 * @param inorder
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode {
    const preLength = preorder.length
    const inoLength = inorder.length
    const result: any = []
    // 找到根节点
    
    /**
     * 遍历函数，可以处理左右子树并生成一颗完整的二叉树
     * @param rootIndex 变
     * @param curMiddleStartIndex 
     * @param curMiddleRightIndex 
     * @param result 
     * @returns 
     */
    function findTree(rootIndex: number,curMiddleStartIndex: number,curMiddleRightIndex: number) {
        if(rootIndex === -1){
            result.push(null)
            return
        }

        const root = preorder[rootIndex]
        const rootNode = new TreeNode(root)
        // result.push(root)
        // 在中序遍历
        const middleOrderIndex =  inorder.findIndex(item=>item === root)
        // 左子树的长度
        const leftTreeLength = middleOrderIndex - curMiddleStartIndex
        // 右子树的长度
        const rightTreeLength = curMiddleRightIndex -  middleOrderIndex
        // 左子树的根节点
        const leftTreeRootIndex = rootIndex + 1
        // 右子树的根节点
        const rightTreeRightIndex = leftTreeRootIndex + leftTreeLength

        if(leftTreeLength > 0){
            rootNode.left = findTree(leftTreeRootIndex,curMiddleStartIndex,middleOrderIndex-1)
        }else{
            rootNode.left = null
        }
        if(rightTreeLength > 0){
            rootNode.right = findTree(rightTreeRightIndex,middleOrderIndex+1,curMiddleRightIndex)
        }else{
            rootNode.right  = null
        }
        return rootNode

    }
    const inLeftIndex = 0
    // const pIndex = inorder.findIndex(item=> item=== preorder[0])
    return findTree(0,0,inorder.length-1)

};
console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))

