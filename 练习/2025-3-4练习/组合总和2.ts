function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    //排序
    const len = candidates.length;
    // 排序一下
    candidates.sort((a,b)=>a-b)
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
            if(i > start&&candidates[i] === candidates[i-1]){
                continue
            }
            state.push(candidates[i])
            dfs(state,total + candidates[i],i+1)
            state.pop()
        }
    }
    dfs([],0,0)
    return res
};

export {}