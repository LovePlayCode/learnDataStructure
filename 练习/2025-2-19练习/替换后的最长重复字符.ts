
/**
 * 
 * 替换后的最长重复字符
 * leetcode: https://leetcode.cn/problems/longest-repeating-character-replacement/
 */
function characterReplacement(s: string, k: number): number {
    let maxLength = 1
    // 用来记录子串中字符出现最多的频次
    let maxStrLength = 0
    // 用来记录当前串中子字符出现的频次
    const map = new Map()
    let left = 0
    let right = 0
    const len = s.length
    while (right < len) {
        const char = s.charAt(right)
        map.set(char, (map.get(char)||0) + 1)
        maxStrLength = Math.max(maxStrLength,map.get(char))
        // 当第一次出现大于 K 后，不满足条件，所以需要left-
        if(right - left + 1 -maxStrLength > k){
            map.set(s.charAt(left),map.get(s.charAt(left))-1)
            left++
        }
        maxLength = Math.max(maxLength,right-left+1)
        right++
    }
    return maxLength
};
export { }