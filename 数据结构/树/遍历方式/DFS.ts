/**
 * 前序遍历
 */
function preOrder(root,list){
    // const list = []
    if(root === null){
        return null
    }
    list.push(root.val) 

    preOrder(root.left,list)
    preOrder(root.right,list)

}
/**
 * 中序遍历
 */
function inOrder(root,list){
    if(root === null ){
        return null
    }
    inOrder(root.left,list)
    list.push(root.val)
    inOrder(root.right,list)
}
/**
 * 后序遍历
 */
function postOrder(root,list){
    if(root === null){
        return null
    }
    postOrder(root.left,list)
    postOrder(root.right,list)
    list.push(root.val)
}