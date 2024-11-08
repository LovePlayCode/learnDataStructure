/**
 * 判断是否有环
 */

// 可以借助一个 map 来判断 每次遍历的时候就 先判断是否存在，如果存在说明有环，如果不存在，往 map set  

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new WeakMap()
    let currentNode = head
    let count = 0
    while(currentNode){
        if(map.has(currentNode)){
            return true
        }
        map.set(currentNode,count++)
        currentNode = currentNode.next
    }

    return false
};

// 快慢指针
var hasCycleFast = function(head){
    if(head === null || head.next === null){
        return false
    }
    let slow = head
    let fast = head.next
    while(fast !== slow){
        if(fast === null || fast.next === null){
            return false
        }
        slow = slow.next
        fast = fast.next
    }
    return true
}