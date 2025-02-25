
function generateParenthesis(n) {
    const res = []
    const dfs = (leftCount, rightCount, str) => {
        if (leftCount > rightCount) return
        if (leftCount === 0 && rightCount === 0) {
            res.push(str)
            return
        }
        if (leftCount > 0) {
            dfs(leftCount - 1, rightCount, str + '(')
        }
        if (rightCount > 0) {
            dfs(leftCount, rightCount - 1, str + ')')
        }


    }
    dfs(n, n, '')
    return res
}
export { }