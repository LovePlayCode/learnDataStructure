/**
 * 
 * 
 *  const input = "3[a2[c]]";
 * "3  a2[c]"
 * "3 a2 c]"
    const output = decodeString(input);
    console.log(output);  // 输出：accaccacc

 */

const input = "3[a2[cds3[j]]]";
// cdscdsjjj
/**
 *
 * @param {string} input
 * // Electron + React + TS
 * // 开放能力... web
 * // 学习途径: 掘金 极客。
 */
function decodeString(input) {
  const stack = [];
  const num = [];
  const str = [];
  let curStr = "";
  let curNum = 0;
  for (let char of input) {
    if (char === "[") {
      num.push(parseInt(curNum));
      str.push(curStr);
      curStr = "";
      curNum = 0;
    } else if (char === "]") {
      const reNum = num.pop();
      const reCurStr = str.pop();
      curStr = reCurStr + curStr.repeat(reNum);
      // str.push(formatStr);
    } else if (/\d/.test(char)) {
      curNum = parseInt(char);
    } else {
      curStr = curStr + char;
    }
  }
  // console.log(str);
  return curStr;
}

const str = decodeString(input);
console.log(str);
// function app() {
//   setTimeout(() => {
//     console.log("1-1");
//     Promise.resolve().then(() => {
//       console.log("2-1");
//     });
//   });

//   console.log("1-2");

//   Promise.resolve().then(() => {
//     console.log("1-3");
//     setTimeout(() => {
//       console.log("3-1");
//     });
//   });
// }
// app();
// 1-2
// 1-3
// 1-1
// 2-1
// 3-1
