/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 递归写法，需要写出递推公式  
 * { 
list1[0]+merge(list1[1:],list2)
list2[0]+merge(list1,list2[1:])

 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2
    }
    if(list2 === null){
        return list1
    }
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }else{
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    }

};

/**
 * 迭代写法
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2
    }
    if(list2 === null){
        return list1
    }
    let preNode = new ListNode(-1)
    let result = preNode
    while(list1 !== null && list2!==null){
        if(list1.val < list2.val){
            preNode.next = list1
            list1 = list1.next
        }else{
            preNode.next = list2
            list2 = list2.next
        }
        preNode = preNode.next
    }
    preNode.next =   list1 === null ? list2 : list1
    return result.next
};