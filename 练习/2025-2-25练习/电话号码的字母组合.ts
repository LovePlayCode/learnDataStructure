function letterCombinations(digits) {
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

const result = [];
const dfs = (index,curr)=>{
    if(index === digits.length){
        result.push(curr)
        return
    }
    const curStrArr = digitMap[digits[index]]
    for(let char of curStrArr){
        dfs(index+1,curr+char)
    }
}
dfs(0,'')
return result
}

export {}