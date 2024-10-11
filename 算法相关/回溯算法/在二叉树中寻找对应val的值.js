/**
 * 
 * 给定一棵二叉树，搜索并记录所有值为7的节点。
 */
function preOrder(root,res){
    if(root === null){
        return null
    }
    if(root.val === 7){
        res.push(root)
    }
    preOrder(root.left,res)
    preOrder(root.right,res)
}