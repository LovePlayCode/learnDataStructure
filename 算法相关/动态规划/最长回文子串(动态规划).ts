function longestPalindrome(s: string): string {
    // dp[i][j] 表示子串s[i..j]是否为回文串
    // dp[i][j] = s[i] = s[j] && dp[i+1][j-1]
    // 边界条件 j - i < 3
    // dp [i][j] = true
    let start = 0
    let maxLength = 1
    // @ts-ignore
    const dp = Array(s.length).fill(null).map((_, i) => {
        // @ts-ignore

        return Array(s.length).fill(null)
    })
    for(let index=0;index<s.length;index++){
        dp[index][index] = true
    }
    // console.log('dp==',JSON.stringify(dp))
    for(let col = 1; col < s.length; col++){
        for(let row=0;row < col;row++){
            // dp[]
            if(s[col] !== s[row]){
                dp[row][col] = false
            }else{
                if(col - row < 3){
                    dp[row][col] = true
                }else{
                    dp[row][col] = dp[row+1][col-1]
                }
            }
            if(dp[row][col] && col - row +1 > maxLength){
                maxLength = col - row +1
                start = row
            }
        }
    }
    return s.substring(start,start+maxLength)
};
console.log(longestPalindrome("aaaa"));
