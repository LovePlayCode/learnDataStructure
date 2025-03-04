function restoreIpAddresses(s: string): string[] {
    const slen = s.length
    const res: string[] = []
    const dfs = (start,state: string[])=>{
        if(state.length === 4){
            if(start === slen){
                res.push(state.join('.'))
            }
            return
        }
        if (start === s.length) {
            return;
        }
  
        if(s[start] === '0'){
            state.push('0')
            dfs(start+1,state)
            state.pop()
        }
        let curStr = '';
        for(let i = start; i < slen; i++){
            curStr = curStr + s[i]
            const nums = parseInt(curStr)
            if(nums > 0 && nums<= 255 ){
                state.push(curStr)
                dfs(i+1,state)
                state.pop()
            }else{
                break
            }
        }
    }
    dfs(0,[])
    return res
};


export {}