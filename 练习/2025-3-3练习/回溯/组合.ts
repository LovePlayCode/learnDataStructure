function combine(n: number, k: number): number[][] {
    const res: number[][] = []

    const dfs = (state: number[],start: number)=>{
        if(state.length === k){
            res.push([...state])
            return
        }
        for(let i = start; i <= n; i++){
            state.push(i)
            dfs(state,i+1)
            state.pop()
        }
    }
   
    dfs([],1)
    return res
};
