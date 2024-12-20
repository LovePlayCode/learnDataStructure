function NumberOf1(n) {
  let count = 0;
  while (n) {
    if (n & 1) {
      count++;
    }
    n = n >> 1;
  }
  return count;
}

function NumberOf2(n) {
  let count = 0;
  let flag = 1;
  while (flag) {
    console.log(flag);
    if (n & flag) {
      count++;
    }
    flag = flag << 1;
  }
  return count;
}

const sum = NumberOf1(0x80000000);
console.log("sum==", sum);
