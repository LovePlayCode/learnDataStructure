/**
 * 判断第二个参数的顺序是否为第一个栈的子序列
 * @param {string[]} pPush
 * @param {string[]} pPop
 * @param {number} nLength
 */
function IsPopOrder(pPush, pPop, nLength) {
  if (pPush.length !== pPop.length) {
    return false;
  }

  let stack = [];
  let popIndex = 0;
  for (let i = 0; i < pPush.length; i++) {
    stack.push(pPush[i]);
    while (stack.length > 0 && stack[stack.length - 1] === pPop[popIndex]) {
      stack.pop();
      popIndex++;
    }
  }
  return popIndex === pPop.length;
}
const a1 = [1, 2, 3, 4, 5];
const a2 = [4, 5, 3, 2, 1];
const flag = IsPopOrder(a1, a2);
console.log(flag);
