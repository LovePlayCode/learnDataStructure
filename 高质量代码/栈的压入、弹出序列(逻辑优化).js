/**
 * 判断第二个参数的顺序是否为第一个栈的子序列
 * @param {string[]} pPush
 * @param {string[]} pPop
 * @param {number} nLength
 */
function IsPopOrder(pPush, pPop, nLength) {
  if (!Array.isArray(pPush) || !Array.isArray(pPop)) {
    return false;
  }

  if (pPush.length !== pPop.length) {
    return false;
  }
  const stack = [];
  let currentIndex = 0;
  for (let i = 0; i < pPop.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] === pPop[i]) {
      stack.pop();
    }

    while (currentIndex < pPush.length && pPush[currentIndex] !== pPop[i]) {
      stack.push(pPush[currentIndex]);
      currentIndex++;
    }
    // 如果当前元素匹配，直接跳过
    if (currentIndex < pPush.length && pPush[currentIndex] === pPop[i]) {
      currentIndex++;
    }
  }
  return stack.length === 0;
}
const a1 = [1, 2, 3, 4, 5];
const a2 = [4, 5, 3, 2, 1];
const flag = IsPopOrder(2, 3);
console.log(flag);
