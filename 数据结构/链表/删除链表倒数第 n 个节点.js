function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /**
     * 1. 新建一个 map 表，用来存放索引和节点信息
     * 2. 遍历一遍链表，填充对应 map 表
     * 3. map表的最大长度 - n 就是需要删除的节点
     * 4. 删除节点  length - n -1 .next = length-n.next  这两部分连接起来即可
     */
  
    let currentNode = head
    let map = new Map()
    let count = 0
    while(currentNode){
        count++
        map.set(count,currentNode)
        currentNode = currentNode.next
    }
    // 说明要删除的是头节点
    if(count ===1){
        return null
    }
    let currentIndex = count - n + 1
    if(!map.has(currentIndex)){
        return
    }
    // 说明删除的是头节点
    if(count - n === 0 ){
        
        head = head.next
        return head
    }
    const deleteNode = map.get(currentIndex)
    console.log(deleteNode,currentIndex)
    const preNode = map.get(currentIndex-1)
    preNode.next = deleteNode.next
    return head
};

// [1,2,3,4,5]
let list = new ListNode(1)
const head = list
for(let i=1;i< 5;i++){
    list.next = new ListNode(i+1)
    list = list.next
}
const res = removeNthFromEnd(head,2)
console.log(res)




/**
 * 用栈实现 根据栈先进先出的特点
 * 1. 新建一个哨兵节点，防止要删除头部的时候不好删除, 后面就是先全部入栈
 * 2. 循环 n 次，进行栈弹出
 * 3. 当前栈顶的元素就是当前要删除元素的上一个元素
 * 4. node.next = node.next.next
 */


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const stack = []
    const sentry = new ListNode(0,head)
    let currentNode = sentry
    while(currentNode){
        stack.push(currentNode)
        currentNode = currentNode.next
    }
    let count = 0
    while(count < n){
        count++
        stack.pop()
    }
    const pree = stack.pop()
    pree.next = pree.next.next
    return sentry.next
};

/**
 * 双指针
 * 1. second, first  first比second 多走 n个节点  second 指向一个哨兵节点， 
 * 这样的话， 当 first 遍历到末尾，second 指向的恰好是要删除节点的前一个节点。
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let first = head
    let sentry = new ListNode(0,head)
    let second =  sentry
    let count = 0
    while(count < n){
        first = first.next
        count++
    }
    while(first){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return sentry.next
};