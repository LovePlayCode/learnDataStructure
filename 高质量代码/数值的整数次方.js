function power(base, exponent) {
  let sum = 1;
  if (base === 0 && exponent < 0) {
    return 0;
  }

  let flag = false;
  if (exponent < 0) {
    exponent = -exponent;

    flag = true;
  }
  for (let i = 1; i <= exponent; i++) {
    sum = sum * base;
  }

  if (flag) {
    sum = (1 / sum).toFixed(2);
  }
  return sum;
}

const data = power(2, -2);
console.log("data==", data);

function recursionPower(base, exponent) {
  console.log("exponent==", exponent);
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  let res = recursionPower(base, exponent >>> 1);
  res *= res;
  if (exponent & 1) {
    res *= base;
  }
  return res;
}

const data1 = recursionPower(2, -2);
console.log("data1==", data);
