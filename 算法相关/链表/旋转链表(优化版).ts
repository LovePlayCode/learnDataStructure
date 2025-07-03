/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0) {
    return head;
  }

  // 1. 先求出长度n以及尾节点
  let n = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    n++;
  }

  // 2. 取余，k超过长度时可直接取余
  k = k % n;
  if (k === 0) {
    return head;
  }

  // 3. 将链表首尾相连
  tail.next = head;

  // 4. 找到新头，新头在 n - k 处
  let stepsToNewHead = n - k;
  let newTail = head;
  for (let i = 1; i < stepsToNewHead; i++) {
    newTail = newTail.next!;
  }

  // 5. 断开环
  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}

export {};
