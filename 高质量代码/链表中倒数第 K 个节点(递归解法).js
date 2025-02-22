function findKthFromEnd(head, k) {
  let index = 0; // 递归深度计数器

  // 递归函数返回倒数第 k 个节点
  function recurse(node) {
    if (node === null) {
      return null; // 递归基准条件：链表末尾
    }

    // 递归遍历链表
    const result = recurse(node.next);

    // 每递归一次，递归深度 index 加 1
    index++;

    // 当 index == k 时，返回当前节点
    if (index === k) {
      return node;
    }

    return result; // 返回找到的节点
  }

  return recurse(head);
}

// 链表节点定义
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

// 构造一个链表 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// 查找倒数第 2 个节点
const k = 3;
const node = findKthFromEnd(head, k);
console.log(node ? node.value : "Not found"); // 输出：4
