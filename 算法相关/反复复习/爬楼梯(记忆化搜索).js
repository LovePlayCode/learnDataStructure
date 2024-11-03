/**
 * 设爬到当前楼梯n 的方案为 dp[i] 
 * dp[i] 由dp[i-1] 和dp[i-2]决定。 所以 dp[i] = dp[i-1] + dp[i-2]
 * 
 */
function main(n){
    const dp = Array(n+1).fill(0)

    dp[1] = 1
    dp[2] = 2
    const mem = Array(n+1).fill(-1)
    const dfs = (i,mem)=>{
        
        if(i === 1 || i === 2){
            return dp[i]
        }
        if(mem[i] !== -1){
            return mem[i]
        }
        const num1 = dfs(i-1)
        const num2 = dfs(i-2)

        
        dp[i] = num1 + num2
        mem[i] = dp[i]
        return dp[i]
    }
    dfs(n,mem)
  
    return dp[n]
}
const n = main(40)
console.log(n)