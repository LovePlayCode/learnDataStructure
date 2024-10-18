/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 * 思路：
 * 1. 第一行有一个球，第二行有两个球，以此类推
 * 2. 每一行球是相同的颜色
 * 3. 相邻行颜色必须不同
 *
 */
var maxHeightOfTriangle = function (red, blue) {
  // 暴力解法
  // 先试红色
  let count = 0;
  const tempRed = red;
  const tempBlue = blue;
  let flag = "red";
  while (true) {
    if (flag === "red") {
      flag = "blue";
      if (red < count + 1) {
        break;
      }
      red -= count + 1;
    } else {
      flag = "red";
      if (blue < count + 1) {
        break;
      }
      blue -= count + 1;
    }
    count++;
  }

  flag = "blue";
  const m1 = count;
  red = tempRed;
  blue = tempBlue;
  count = 0;
  // 再试蓝色
  while (true) {
    if (flag === "red") {
      flag = "blue";
      if (red < count + 1) {
        break;
      }
      red -= count + 1;
    } else {
      flag = "red";
      if (blue < count + 1) {
        break;
      }
      blue -= count + 1;
    }
    count++;
  }
  return Math.max(m1, count);
};

const res = maxHeightOfTriangle(2, 4);
console.log("res==", res);
