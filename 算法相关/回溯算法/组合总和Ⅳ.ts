function combinationSum4(nums: number[], target: number): number {
    const len = nums.length

    const memo = new Map()
    const dfs = (remaining) => {
        if(remaining === 0){
            return 1
        }
        if(remaining <0){
            return 0
        }
        if(memo.has(remaining)){
            return memo.get(remaining)
        }
        let count = 0
        for (let i = 0; i < len; i++) { 
            count += dfs(remaining - nums[i])
        }
        memo.set(remaining,count)
        return count
    }
    return dfs(target)
};
export { }