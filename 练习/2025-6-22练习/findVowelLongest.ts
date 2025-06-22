/**
 * 找到定长字符串中最多的元音的数量
 * leetcode: https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 */

function maxVowels(s: string, k: number): number {
  let count = 0;
  let vowel = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const len = s.length;
  for (let left = 0; left < len; left++) {
    if (vowels.includes(s[left])) {
      vowel++;
    }
    if (left < k - 1) {
      continue;
    }
    count = Math.max(count, vowel);
    const out = left - k + 1;
    if (vowels.includes(s[out])) {
      vowel--;
    }
  }
  return count;
}
export {};
