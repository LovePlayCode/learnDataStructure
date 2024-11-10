/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const map = new Map()
    let count = 0
    while(head){
        map.set(count,head)
        head = head.next
        count++
    }
    const mid = Math.floor(count / 2)
    return map.has(mid)
};

// 快慢指针
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
