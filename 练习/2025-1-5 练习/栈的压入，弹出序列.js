/**
 *
 * @param {number[]} pPush
 * @param {number[]} pPop
 * @param {number} nLen
 */
function IsPopOrder(pPush, pPop, nLen) {
  if (pPush.length !== pPop.length) {
    return false;
  }
  // 定义一个辅助栈
  const auxiliaryStack = [];
  let currindex = 0;

  for (let i = 0; i < nLen; i++) {
    auxiliaryStack.push(pPush[i]);
    while (
      auxiliaryStack.length &&
      auxiliaryStack[auxiliaryStack.length - 1] === pPop[currindex]
    ) {
      currindex++;
      auxiliaryStack.pop();
    }
  }

  return currindex === nLen;
}

const a1 = [1, 2, 3, 4, 5];
const a2 = [4, 3, 5, 1, 2];
const flag = IsPopOrder(a1, a2, a1.length);
console.log(flag);
