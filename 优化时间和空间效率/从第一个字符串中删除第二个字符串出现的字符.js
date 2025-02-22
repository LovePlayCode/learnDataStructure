/**
 *
 * @param {string} str1
 * @param {string} str2
 */
function fromTwoStrDeleteOneStr(str1, str2) {
  const str1Arr = str1.split("");
  const set = new Set();
  for (let char of str2) {
    set.add(char);
  }
  for (let i = 0; i < str1Arr.length; i++) {
    if (set.has(str1[i])) {
      str1Arr[i] = undefined;
    }
  }
  return str1Arr.filter(Boolean).join("");
}

const res = fromTwoStrDeleteOneStr("We are students", "aeiou");
console.log(res);
