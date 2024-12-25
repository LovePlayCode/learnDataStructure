class LinkedNode {
  next = null;
  val = "";
}

/**
 *
 * @param {LinkedNode} head
 * @param {LinkedNode} deleteNode
 */
function Delete(head, deleteNode) {
  if (!(deleteNode instanceof LinkedNode)) {
    throw new TypeError("类型错误...");
  }

  // 情况 1 删除的节点不是尾节点
  // 情况 2 删除的节点是头节点且只有一个
  // 情况 3 删除的是尾节点
  if (deleteNode.next !== null) {
    const next = deleteNode.next;

    deleteNode.val = next.val;
    deleteNode.next = next.next;
  } else if (head === deleteNode) {
    head.val = null;
    head.next = null;
  } else {
    const pNode = head;
    while (pNode.next !== deleteNode) {
      pNode = pNode.next;
    }
    pNode.next = pNode.next.next ?? null;
  }
}
