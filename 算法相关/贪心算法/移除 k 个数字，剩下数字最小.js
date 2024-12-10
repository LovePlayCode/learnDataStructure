/**
 *
 * @param {string} number
 * @param {number} k
 */
function removeKDigits(number, k) {
  // 从左到右遍历
  // 每次只取大的，剩下的就是小的
  const stack = [];
  const length = number.length;
  for (let i = 0; i < length; i++) {
    const digit = number[i];
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  // 拼接结果并去除前导零
  const result = stack.join("").replace(/^0+/, "");

  // 如果结果为空，返回 "0"
  return result.length > 0 ? result : "0";
}

console.log(removeKDigits("1432219", 3)); // 输出: "1219"
console.log(removeKDigits("10200", 1)); // 输出: "200"
console.log(removeKDigits("10", 2)); // 输出: "0"
