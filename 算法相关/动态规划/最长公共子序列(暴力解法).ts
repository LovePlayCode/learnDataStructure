function longestCommonSubsequence(text1: string, text2: string): number {
    const res = []

    // 判断是否为子序列的方法
    function isSubsequence(cur: string[],target: string[]){
        return cur.every(item=>target.includes())
    }
}
// console.log
console.log(longestCommonSubsequence("ace", "abcde"));
