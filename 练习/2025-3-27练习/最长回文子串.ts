
/**
 * 最长回文子串
 * @param s 
 * leetcode: https://leetcode.cn/problems/longest-palindromic-substring/
 */
function longestPalindrome(s: string): string {
    const len = s.length;
    // 定义一个状态dp[i][j],表示i,j构成的子串是不是回文串
    const dp = new Array(len).fill(false).map(item=>{
        return new Array(len).fill(false)
    })

    // 初始化
    for(let i = 0; i < len; i++){
        dp[i][i] = true
    }
    let begin = 0
    let maxLen = 1
    let left = 0, right = 1;
    for(let j = 1; j < len; j++){
        for(let i = 0; i < j; i++){
            // 首尾都不一致了，直接设置false
            if(s[j] !== s[i]){
                dp[i][j] = false
            }else{
                // 说明只有两个元素，直接设置true
                if(j - i <3){
                    dp[i][j] = true
                }else{
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if(dp[i][j] && j-i+1 > maxLen){
                begin = i
                maxLen = j-i+1
            }
        }
    }
    return s.substring(begin,begin+ maxLen)
};

export {}