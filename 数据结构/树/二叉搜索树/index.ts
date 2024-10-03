import { TreeNode } from "../common"

/**
 * 
 * 二叉搜索树的定义:
 *  对于根节点，左子树所有节点的值 < 根节点的值 < 右子树所有节点的值
 *  对于任意节点的左,右子树也是二叉搜索树
 * 
 */
function search(num){
    let cur = this.root
    while(cur !==null){
        if(cur.val < num ) 
            cur = cur.right
        if(cur.val > num){
            cur = cur.left
        }
        else{
            break
        }
    }
    return cur
}
/**
 * 插入节点
 */
function insert(num){
    if(this.root === null){
        this.root = new TreeNode()
        return
    }
    let cur = this.root
    // 用于保存上一次的节点信息，方便我们进行插入操作。
    let pre = null
    while(cur !== null){
        // 因为二叉搜索树是不能有重复节点的，如果找到重复节点，直接返回即可。
        if(cur.val === num){
            return 
        }
        pre = cur
        if(cur.val < num){
            cur = cur.right
        }
        cur = cur.left
    }
    const node = new TreeNode()
    if(pre.val < num){
        pre.right = node
    }
    pre.left = node
}
// 删除节点
function remove(value){
    if(this.root === null){
        return
    }
    let cur = this.root
    let pre = null
    while(cur !== null){
        if(cur.val === value){
            break
        }
        pre = cur
        if(cur.val < value){
            cur = cur.right
        }else{
            cur = cur.left
        }
    }
    // 若无删除节点，直接返回
    if(cur === null){
        return
    }
    if(cur.left === null || cur.right === null){
        const child = cur.left !== null ? cur.left : cur.right
        if(cur !== this.root){
            if(pre.left === cur){
                pre.left = child
            }
            else{
                pre.right = child
            }

        }else{
            this.root = child 
        }
    }
    // 子节点数量为两个
    else{
        let tmp = cur.right
        while(tmp.left !== null){
            tmp = tmp.left
        }
        this.remove(tmp.val)
        cur.val = tmp.val
    }
}