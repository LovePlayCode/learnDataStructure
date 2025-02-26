function numDecodings(s) {
    const memo = {};

    function backtrack(index,state) {
        if (index === s.length) {
            console.log(state)
            return 1;
        }
        if (s[index] === '0') {
            return 0;
        }
        if (memo[index] !== undefined) {
            return memo[index];
        }

        state.push(s[index])
        let count = backtrack(index + 1,state);
        
        if (index + 1 < s.length && (s[index] === '1' || (s[index] === '2' && s[index + 1] <= '6'))) {
            
            count += backtrack(index + 2,state);
           
        }

        memo[index] = count;
        return count;
    }

    return backtrack(0,[]);
}

// 示例用法
const s = "11106";
console.log(numDecodings(s)); // 输出解码方法的总数