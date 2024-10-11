/**
 * 
 * @param {*} root 
 * @param {any[]} res 
 * @param {any[]} path 
 * @returns 
 */
function preOrder(root,res,path){
    if(root === null){
        return null
    }
    path.push(root)
    if(root.val === 7){
        res.push([...path])
    }
    preOrder(root.left,res)
    preOrder(root.right,res)
    path.pop()
}
