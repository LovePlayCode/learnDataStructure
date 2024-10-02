function levelOrder(root){
    const queue = [root]
    // 初始化一个 list
    const list = []
    while(queue.length){
        let node = queue.shift()
        list.push(node)
        if(node.left){
            queue.push(node)
        }
        if (node.right) queue.push(node.right); // 右子节点入队
    }
    return list
}