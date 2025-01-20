/**
 * 不用加减乘除做两个数相加
 */

function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Type错误");
  }

  while (num2 !== 0) {
    console.log("运行几次...");
    const sum = num1 ^ num2;
    const carry = (num1 & num2) << 1;
    num1 = sum;
    num2 = carry;
  }
  return num1;
}

const res = add(-1090, 20);
console.log("res==", res);
