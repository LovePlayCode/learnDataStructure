/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(head)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let curr = head
    while(curr){
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};
// console.log('数据为::',reverseList(head))

// 递归解法
var reverseList = function (head){
    if(head === null || head.next === null){
        return head
    }
    const last = reverseList(head.next)
    head.next.next  = head
    head.next = null
    return last
}
console.log('数据为::',reverseList(head))