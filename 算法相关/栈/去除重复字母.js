/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let stack = [];
  let count = new Array(26).fill(0); // 记录每个字符的剩余次数
  let inStack = new Array(26).fill(false); // 记录字符是否已经在栈中

  // 统计每个字符出现的次数
  for (let char of s) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // 遍历字符串  "bca" 有一个条件是不能打乱其他字符的相对位置。
  for (let char of s) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    count[index]--; // 当前字符处理一次，减少剩余次数

    // 如果字符已经在栈中，则跳过
    if (inStack[index]) continue;

    // 如果栈顶字符字典序较大，并且后续还有该字符出现，弹出栈顶字符
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      count[stack[stack.length - 1].charCodeAt(0) - "a".charCodeAt(0)] > 0
    ) {
      inStack[stack.pop().charCodeAt(0) - "a".charCodeAt(0)] = false;
    }

    // 将当前字符加入栈
    stack.push(char);
    inStack[index] = true;
  }

  // 返回结果
  return stack.join("");
};

const res = removeDuplicateLetters("bca");
console.log(res);
