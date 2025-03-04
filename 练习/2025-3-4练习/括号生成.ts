function generateParenthesis(n: number): string[] {
    const res: string[] = []
    const dfs = (leftCount,rightCount,curStr)=>{
        if(leftCount ===0 && rightCount ===0 ){
            res.push(curStr)
            return
        }
        if(leftCount ===0 || rightCount ===0 ){
            return
        }
        if(rightCount<leftCount){
            return
        }
        // 先整 左括号
        dfs(leftCount--,rightCount,curStr+'(')
        // 有括号
        dfs(leftCount,rightCount--,curStr+')')
    }
    dfs(n,n,'')
    return res
};

export {}