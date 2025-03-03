function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = []
    const len = nums.length;
    nums.sort((a, b) => a - b)
    const dfs = (state: number[], start: number) => {
        res.push([...state])
        for (let i = start; i < len; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue
            }
            state.push(nums[i])
            dfs(state, i + 1)
            state.pop()
        }
    }
    dfs([], 0)
    return res
};