function subsets(nums: number[]): number[][] {
    const res:number[][] = []
    const len = nums.length;
    const dfs = (state: number[],start: number)=>{
        res.push([...state])
        for(let i = start; i < len; i++){
            state.push(nums[i])
            dfs(state,i+1)
            state.pop()
        }
    }
    dfs([],0)
    return res
};
export {}