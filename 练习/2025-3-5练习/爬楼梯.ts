/**
 * 回溯会产生多余的结果，通过记忆化搜索来优化子问题的重复求解，提高时间效率。 
 * 空间换时间
 */
function climbStairs(n: number): number {
    const memo = new Array(n+1).fill(-1)
    const dfs = (n)=>{
        if(n === 1 || n == 2){
            return n
        }
        if(memo[n]!==-1){
            return memo[n]
        }
        const a1 = dfs(n-1)
        memo[n-1] = a1
        const a2 = dfs(n-2)
        memo[n-2] = a2
        return a1 + a2
    }
    return dfs(n)
};

export {}