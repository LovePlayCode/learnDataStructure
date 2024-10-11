class TreeNode{
    val; 
    height;
    left;
    right;
    constructor(val,left,right,height){
        this.val = val ===  undefined ? 0 : val;this.height = height === undefined ? 0 : height;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    // 获取节点高度
    height(node){
        return node === null ? -1 : node.height
    }
    #updateHeight(node){
        node.height = Math.max(this.height(node.left),this.height(node.right)) + 1
    }
}