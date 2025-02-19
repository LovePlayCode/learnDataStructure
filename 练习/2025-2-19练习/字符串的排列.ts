
/**
 * 字符串的排列
 * leetcode: https://leetcode.cn/problems/permutation-in-string/
 */
function checkInclusion(s1: string, s2: string): boolean {
    // 保存s1 字符串出现的频率
    const pFreq = new Array(26).fill(0);
    // 保存s2 字符串出现的频率
    const winFreq = new Array(26).fill(0);

    const baseVal = 'a'.charCodeAt(0)
    const set = new Set()
    // 先去处理 S1 中的字符串
    for (const char of s1) {
        const index = char.charCodeAt(0) - baseVal
        pFreq[index]++
        // 去重，获取长度
        set.add(char)
    }
    // 获取 s2 的长度
    const len2 = s2.length
    let winCount = 0
    let left = 0
    let right = 0
    const s1CharLen = set.size
    while (right < len2) {
        const s1Index = s2[right].charCodeAt(0) - baseVal

        if (pFreq[s1Index] > 0) {
            winFreq[s1Index]++
            if (pFreq[s1Index] === winFreq[s1Index]) {
                winCount++
            }
        }

        // 在这里++，后续就不需要-1 了
        right++
        /// 在[left,right]情况下满足条件，还需要判断是否为S2中的子串
        while (winCount === s1CharLen) {

            if (right - left === s1.length) {
                return true
            }
            const leftIndex = s2[left].charCodeAt(0) - baseVal
            if (pFreq[leftIndex] > 0) {
                winFreq[leftIndex]--
                if (winFreq[leftIndex] < pFreq[leftIndex]) {
                    // winFreq[le]
                    winCount--
                }
            }

            left++
        }
    }
    return false
};

export { }