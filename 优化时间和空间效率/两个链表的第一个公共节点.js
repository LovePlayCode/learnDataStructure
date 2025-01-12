class ComplexListNode {
  value = "";
  pNext = null;
  constructor(value, pNext, pSibling) {
    this.value = value;
    this.pNext = pNext ?? null;
  }
}

/**
 *
 * @param {ComplexListNode} pNode1
 * @param {ComplexListNode} pNode2
 */
function FindFirstCommonNode(pNode1, pNode2) {
  const stack1 = [];
  const stack2 = [];
  let p1Temp = pNode1;
  let p2Temp = pNode2;
  while (p1Temp) {
    stack1.push(p1Temp);
    p1Temp = p1Temp.pNext;
  }

  while (p2Temp) {
    stack2.push(p2Temp);
    p2Temp = p2Temp.pNext;
  }

  // 依次出栈， 最后出栈的就是结果
  while (stack1[stack1.length - 1] === stack2[stack2.length - 1]) {}
  return stack1.pop();
}

const commonNode = new ComplexListNode(13);
commonNode.pNext = new ComplexListNode(17);
const node1 = new ComplexListNode(10);
node1.pNext = new ComplexListNode(12);
node1.pNext.pNext = commonNode;
const node2 = new ComplexListNode(19);
node1.pNext = new ComplexListNode(18);
node1.pNext.pNext = commonNode;
const res = FindFirstCommonNode(node1, node2);
console.log("res==", res);
