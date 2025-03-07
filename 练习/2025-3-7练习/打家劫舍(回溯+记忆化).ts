function rob(nums: number[]): number {
    const len = nums.length
    const memo = {}
    const dfs = (n: number)=>{
        if(n >= len){
            return 0
        }
        if(memo[n]!== undefined){
            return memo[n]
        }
        // 选择当前，只能选择下一个,不能选择相邻的元素
        const count = nums[n] + dfs(n+2)
        // 不选择当前，选择下一个元素
        const skip = dfs(n+1)
        const result = Math.max(count,skip)
        memo[n] = result
        return result
    }   
    return dfs(0)
};

export { }