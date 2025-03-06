function numDecodings(s: string): number {
    let res = 0
    const len = s.length
    const res1: string[][] = []
    const dfs = (start: number,state: string[])=>{
        if(state.length === 4){
            if(start === len){
                res1.push([...state])
                
            }   
            return
        }
        if(start === len){
            return
        }
        let curStr = ''
        for(let i = start; i < len; i++){
            const newChar = curStr + s[i]
            if( newChar<= '26' && newChar >= '1'){
                curStr = newChar
                state.push(curStr)
                dfs(i+1,state)
                state.pop()
            }
        }

    }
    dfs(0,[])
    console.log(res1)
    return res
};

export {}