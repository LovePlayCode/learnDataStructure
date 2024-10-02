function longestCommonSubsequence(text1: string, text2: string): number {
    // 定义一个 dp 数组 text1.length+1 text2.length
    // @ts-ignore
    const dp = new Array(text1.length+1).fill(0).map((item,index)=>{
        // if(index === 0){
        //     return new Array(text2.length).fill(0)
        // }
        // @ts-ignore
        return new Array(text2.length+1).fill(0)
    })

    for(let row=1;row < text1.length+1;row++) {
        for(let col = 1; col < text2.length+1; col++){
            dp[row][col] = Math.max(dp[row][col-1],dp[row-1][col])
            if(text1[row-1] === text2[col-1]){
                dp[row][col] = dp[row-1][col-1] + 1
            }
        }

    }
    const rowLength = dp[dp.length-1].length
    // consle.log()
    return dp[dp.length-1][rowLength-1]
};
// console.log
console.log(longestCommonSubsequence("ace", "abcde"));
