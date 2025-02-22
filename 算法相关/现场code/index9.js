/**
 * 最长回文子串
 * babad
 * @param {string} str
 */
function main(str) {
  if (str === null || str === undefined) {
    return "";
  }
  if (str.length === 1) {
    return str;
  }
  let maxVal = "";
  for (let i = 0; i < str.length - 1; i++) {
    const char = str[i];
    let resStr = [char];
    for (let j = i + 1; j < str.length; j++) {
      resStr.push(str[j]);
      if (isFlag(resStr)) {
        maxVal = maxVal.length > resStr.length ? maxVal : resStr.join("");
      }
    }
  }
  return maxVal;
}

/**
 *
 * @param {string[]} strArr
 */
function isFlag(strArr) {
  const temp = [...strArr];
  const reverse = temp.reverse();
  //   console.log(strArr, reverse);
  return strArr.join("") === reverse.join("");
}

const str = main("babad");
console.log(str);
