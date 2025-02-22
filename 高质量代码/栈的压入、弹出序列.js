/**
 * 判断第二个参数的顺序是否为第一个栈的子序列
 * @param {string[]} pPush
 * @param {string[]} pPop
 * @param {number} nLength
 */
function IsPopOrder(pPush, pPop, nLength) {
  const stack = [];
  let currentIndex = 0;
  for (let i = 0; i < pPop.length; i++) {
    if (stack.length > 0) {
      const popValue = stack[stack.length - 1];
      if (popValue !== pPop[i]) {
        while (pPush[currentIndex] !== pPop[i] && currentIndex < pPush.length) {
          stack.push(pPush[currentIndex]);
          currentIndex++;
        }
        if (currentIndex < pPush.length) {
          currentIndex++;
        }
      } else {
        stack.pop();
      }
    } else {
      while (pPush[currentIndex] !== pPop[i] && currentIndex < pPush.length) {
        stack.push(pPush[currentIndex]);
        currentIndex++;
      }
      if (currentIndex < pPush.length) {
        currentIndex++;
      }
    }
  }
  console.log(stack);
  if (stack.length === 0) {
    return true;
  }
  return false;
}
const a1 = [1, 2, 3, 4, 5];
const a2 = [4, 3, 5, 1, 2];
const flag = IsPopOrder(a1, a2);
console.log(flag);
