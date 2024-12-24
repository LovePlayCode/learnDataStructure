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
