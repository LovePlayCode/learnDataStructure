const str = 'abcd';

function getAllCombinations(str) {
    const result = [];

    // 外层循环控制组合的长度
    let len = 0
    const res = []
    while(len <= str.length){
        let cur = ''
        for(let i = 0; i<str.length - len;i++){
            // console.log(str[i])
            // cur.push(str[i])x
            cur =str[i]
            for(let j= i+1; j<= i+len;j++){
                cur +=str[j]
            }

            result.push(cur)
        }
        len++

        // console.log(cur)
    }

    return result;
}

const combinations = getAllCombinations(str);
console.log(combinations);