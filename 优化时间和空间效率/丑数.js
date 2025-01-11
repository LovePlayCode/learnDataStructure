/**
 * 判断是否为丑数
 * @param {number} number
 */
function IsUgly(number) {
  if (number < 2) {
    return false;
  }

  while (number % 2 === 0) {
    number = Math.floor(number / 2);
  }

  while (number % 3 === 0) {
    number = Math.floor(number / 3);
  }

  while (number % 5 === 0) {
    number = Math.floor(number / 5);
  }

  return number === 1 ? true : false;
}

function GetUglyNumber(index) {
  if (index <= 0) {
    throw new Error("错误");
  }

  if (index === 1) {
    return 1;
  }

  let count = 0;
  let curNum = 1;
  while (count < index) {
    if (IsUgly(curNum)) {
      count++;
    }
    curNum++;
  }
  return curNum;
}
