function letterCombinations(digits: string): string[] {
    const res: string[] = []
    const len = digits.length
    if (digits.length === 0) return [];
    const digitMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const dfs = (index: number,curStr: string)=>{
        if(index === len){
            res.push(curStr)
            return
        }
        const curArr = digitMap[digits[index]]
        for(const char of curArr){
            dfs(index+1,curStr+char)
        }
    }
    dfs(0,'')
    return res
}
export { }