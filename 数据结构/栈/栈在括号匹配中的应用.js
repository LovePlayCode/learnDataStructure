/**
 * @param {string} s
 * @return {boolean}
 *
 * 1. 维护一个 map。map 中是括号的映射
 * 2. 维护一个栈。进行括号的判断
 * 3. 遍历字符串，如果当前字符串是栈顶字符串，说明匹配 出栈 否者入栈
 */
var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (const char of s) {
    if (stack.length === 0) {
      stack.push(map[char]);
    } else {
      const peekVal = stack[stack.length - 1];
      if (peekVal === char) {
        stack.pop();
      }else{
        stack.push(map[char])
      }
    }
  }
  return stack.length === 0 ? true : false;
};
