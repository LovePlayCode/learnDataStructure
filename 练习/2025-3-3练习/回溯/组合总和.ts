function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    //排序
    const len = candidates.length;
    const dfs = (state: number[],total: number,start) => { 
        if(total === target){
            res.push([...state])
            return
        }
        if(total > target){
            return
        }
        for(let i = start; i < len; i++){
            if(candidates[i] > target){
                continue
            }
            state.push(candidates[i])
            dfs(state,total + candidates[i],i)
            state.pop()
        }
    }
    dfs([],0,0)
    return res
};

export { } 