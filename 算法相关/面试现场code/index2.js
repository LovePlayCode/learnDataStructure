/**
 * 
 * 
 *  const input = "3[a2[c]]";
 * "3  a2[c]"
 * "3 a2 c]"
    const output = decodeString(input);
    console.log(output);  // 输出：accaccacc

 */

/**
 *
 * @param {string} input
 * // Electron + React + TS
 * // 开放能力... web
 * // 学习途径: 掘金 极客。
 */
function decodeString(input) {
  //
  const stack = [];

  const num = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === stack[stack.length]) {
    }

    if (char === "[") {
      stack.push("]");
    }
    const textNum = /a-z/;
  }
}

function app() {
  setTimeout(() => {
    console.log("1-1");
    Promise.resolve().then(() => {
      console.log("2-1");
    });
  });

  console.log("1-2");

  Promise.resolve().then(() => {
    console.log("1-3");
    setTimeout(() => {
      console.log("3-1");
    });
  });
}
app();
// 1-2
// 1-3
// 1-1
// 2-1
// 3-1
