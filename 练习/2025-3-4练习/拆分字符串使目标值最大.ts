function maxUniqueSplit(s: string): number {
    let res: number = 0
    const slen = s.length
    const set = new Set()
    const dfs = (curstr,start,count: number)=>{
        if(slen === start){
            res = Math.max(count,res)
            return
        }
        let newChar = ''
        for(let i = start; i < slen; i++){
            newChar = newChar + s[i]
            if(!set.has(newChar)){
                set.add(newChar)
                dfs(newChar,i+1,count+1)
                set.delete(newChar)
            }
        }
    }
    dfs('',0,0)
    return res
};
export {}