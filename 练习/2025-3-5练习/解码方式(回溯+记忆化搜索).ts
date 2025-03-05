function numDecodings(s) {
    const memo = {};

    function backtrack(index,state) {
        console.log('memo==',memo)
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
        console.log(`index==${index}value==${memo[index]}`)
        memo[index] = count;
        return count;
    }

    return backtrack(0,[]);
}

