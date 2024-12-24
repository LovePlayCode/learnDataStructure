/**
 *
 * @param {number} n
 */
function printToMaxOfNDigits(n) {
  let num = 1;
  let i = 0;
  while (i++ < n) {
    num *= 10;
  }
  for (let i = 1; i < num; i++) {
    console.log("数值==", i);
  }
}

// printToMaxOfNDigits(3);

function printToMaxOfNDigitsUseString(n) {
  if (n <= 0) {
    return;
  }
  let str = "0".repeat(n);
  let arr = str.split("");
  //   arr[n] = "\0";
  str = arr.join("");

  while (!Increment(arr)) {
    PrintNumber(arr);
  }
}
/**
 *
 * @param {string[]} number
 */
function Increment(number) {
  let isOverflow = false;
  let nTakeOver = 0;
  let nLength = number.length;
  for (let i = nLength - 1; i >= 0; i--) {
    let nSum = number[i] - "0" + nTakeOver;
    if (i === nLength - 1) {
      nSum++;
    }

    if (nSum >= 10) {
      if (i === 0) {
        isOverflow = true;
      } else {
        nSum -= 10;
        nTakeOver = 1;
        number[i] = "0" + nSum;
      }
    } else {
      number[i] = "0" + nSum;
      break;
    }
  }
  return isOverflow;
}
/**
 *
 * @param {string[]} number
 */
function PrintNumber(number) {
  let isBeginning = true;
  let nLength = number.length;
  for (let i = 0; i < nLength; i++) {
    if (isBeginning && number[i] !== "0") {
      isBeginning = false;
    }
    if (!isBeginning) {
      console.log(number[i]);
    }
  }
}

printToMaxOfNDigitsUseString(3);
