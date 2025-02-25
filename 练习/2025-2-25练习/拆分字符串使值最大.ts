function maxUniqueSplit(s: string): number {
    const len = s.length;
    let res = 0
    const set = new Set()
    const dfs = (start,count)=>{
        if(start === len){
            res = Math.max(res, count);
            return;
        }
        let curStr = ''
        for(let i = start; i < len; i++){
            curStr+=s[i]
            if(!set.has(curStr)){
                set.add(curStr)
                dfs(i+1,count+1)
                set.delete(curStr)
            }
        }
    }
    dfs(0,0)
    return res
};

export {}