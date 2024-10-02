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