function integerBreak(n: number): number {
    let memo = new Array(n+1).fill(-1)
    const dfs =(n)=>{
        if(n === 2){
            return 1
        }
        if(memo[n]!==-1){
            return memo[n]
        }
        let max = 0;
        for(let i = 1; i < n; i++){
            const curMax = Math.max(i*(n-i),i * dfs(n-i))
            if(curMax > max){
                max = curMax
            }
        }
        memo[n] = max
        return max
    }
    return dfs(n)
};

export {}