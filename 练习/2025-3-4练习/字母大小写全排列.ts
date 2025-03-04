function letterCasePermutation(s: string): string[] {
    const res: string[] = []
    const slen = s.length
    const dfs = (curStr,start)=>{
        if(start === slen){
            res.push(curStr)
            return 
        }
        if(s[start] >='0' && s[start] <= '9'){
            dfs(curStr + s[start],start+1)
            return
        }
        // 大写
        dfs(curStr + s[start].toUpperCase(),start+1)
        // 小写
        dfs(curStr + s[start].toLowerCase(),start+1)
    }
    dfs('',0)
    return res
};


export {}