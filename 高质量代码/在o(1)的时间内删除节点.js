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

  const next = deleteNode.next;
  next.val = deleteNode.va;
}
