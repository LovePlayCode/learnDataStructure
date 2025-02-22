/**
 *
 * @param {number} n
 */
function NumberOf1(n) {
  let num = 0;

  while (n) {
    console.log("n==", n);
    if (n % 10 === 1) {
      num += 1;
    }
    n = Math.floor(n / 10);
  }
  return num;
}

/**
 *
 * @param {number} n
 */
function NumberOflBetween1AndN(n) {
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += NumberOf1(i);
  }
  return number;
}

const res = NumberOflBetween1AndN(12);
console.log(res);
