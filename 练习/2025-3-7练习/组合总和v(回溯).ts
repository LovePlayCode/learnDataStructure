function combinationSum4(nums: number[], target: number): number {
    const memo = new Array(target + 1).fill(-1)
    const dfs = (target) => {
        if (target === 0) {
            return 1
        }
        if (memo[target] !== -1) {
            return memo[target]
        }
        let count = 0
        for (const num of nums) {
            if (num <= target) {
                count += dfs(target - num)
            }

        }
        memo[target] = count
        return count
    }
    return dfs(target)
};


export { }