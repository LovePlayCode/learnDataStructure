/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 保存s1 字符串出现的频率
  const pFreq = new Array(26).fill(0);
  // 保存s2 字符串出现的频率
  const winFreq = new Array(26).fill(0);
  const tLen = s2.length;

  const baseVal = "a".charCodeAt(0);

  // 记录第1个字符串中出现的字符的种类
  const set = new Set();

  // 填充 pFreq 次数
  for (const char of s1) {
    const index = char.charCodeAt(0) - baseVal;
    pFreq[index]++;
    set.add(char);
  }

  // 这个相当于去冲后的结果
  const s1Len = set.size;
  const pLen = s1.length;
  let left = 0;
  let right = 0;
  let winCount = 0;
  console.log(pFreq);
  while (right < tLen) {
    const char = s2[right];
    const rightIndex = char.charCodeAt(0) - baseVal;
    // 判断是否在第一个字符串中出现过
    if (pFreq[rightIndex] > 0) {
      winFreq[rightIndex]++;
      if (winFreq[rightIndex] === pFreq[rightIndex]) {
        winCount++;
      }
    }
    right++;

    // 说明满足了条件，[left,right)结尾的字符串中满足s2的要求，但是可能不是连续的，需要继续进行判断
    while (winCount === s1Len) {
      console.log(right, left);
      if (right - left === pLen) {
        return true;
      }
      const leftIndex = s2[left].charCodeAt(0) - baseVal;
      if (pFreq[leftIndex] > 0) {
        winFreq[leftIndex]--;
        if (winFreq[leftIndex] < pFreq[leftIndex]) {
          winCount--;
        }
      }
      left++;
    }
  }
  return false;
};

const res = checkInclusion("ab", "eidbaooo");
console.log(res);
export {}