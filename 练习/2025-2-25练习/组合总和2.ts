function combinationSum2(candidates: number[], target: number): number[][] {
    const len = candidates.length
    // 排序一下
    candidates.sort((a, b) => a - b)
    const res: number[][] = []
    const dfs = (state: number[], start: number, total) => {
        if (total === target) {
            res.push([...state])
        }
        for (let i = start; i < len; i++) {
            if (candidates[i] > target) {
                break
            }
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue
            }
            state.push(candidates[i])
            dfs(state, i + 1, total + candidates[i])
            state.pop()
        }
    }
    dfs([], 0, 0)
    console.log(res)
    return res
};
export { }