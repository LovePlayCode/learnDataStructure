/**
 * 递归解法判断栈的压入和弹出序列是否满足
 * @param {string[]} pPush
 * @param {string[]} pPop
 * @param {number} nLength
 * @param {any[]} stack
 * @param {number} popIndex
 */
function IsPopOrder(pPush, pPop, nLength, stack, popIndex, currentIndex) {
  if (popIndex === pPop.length) {
    return stack.length === 0;
  }

  if (stack.length > 0 && stack[stack.length - 1] === pPop[popIndex]) {
    stack.pop();

    return IsPopOrder(pPush, pPop, nLength, stack, popIndex + 1, currentIndex);
  }
  // 如果栈顶元素不等于 pPop[popIndex]，则将 pPush[currentIndex] 元素压入栈
  if (currentIndex < pPush.length) {
    stack.push(pPush[currentIndex]);
    return IsPopOrder(pPush, pPop, nLength, stack, popIndex, currentIndex + 1); // 继续压入下一个元素
  }
  return false;
}
const a1 = [1, 2, 3, 4, 5];
const a2 = [4, 5, 3, 2, 1];
const flag = IsPopOrder(a1, a2, 0, [], 0, 0);
console.log(flag);
