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
  if (!head) {
    return head;
  }
  let lastNode = null;
  let cur = head;
  let first = head;
  let n = 1;
  while (cur.next) {
    cur = cur.next;
    n++;
  }
  if (n === 1 || k === 0 || k % n === 0) {
    return head;
  }
  // 连成环
  cur.next = head;
  let curHead = head;
  for (let i = 0; i < k % n; i++) {
    let cur = curHead;

    while (cur.next !== first) {
      lastNode = cur;
      cur = cur.next;
    }
    curHead = cur;
    first = curHead;
    if (i === (k % n) - 1) {
      lastNode.next = null;
    }
  }
  return curHead;
}

export {};
