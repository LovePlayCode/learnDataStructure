/**
 * 输入样例: [1,2,3]
 * 输出样例: [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2]、[3,2,1]
 */

/**
 * 
 * @param {number[]} arr
 * 目标是: [1,2,3] [1,3,2]
 */


/**
 * 
 * @param {number[]} state 
 */
function isSolution(state,length){
    return state.length === length
}

/**
 * 
 * @param {boolean[]} selected // 已经选择的元素 
 * @param {number} index 
 * @returns 
 */
function isValid(selected,index){
    return !selected[index]
}

function makeChoice(state,choice,selected,index){
    state.push(choice)
    selected[index] = true
}
/* 回溯算法框架 */
function backtrack(state, choices, res,selected,resArr) {
    // 判断是否为解
    if (isSolution(state,choices.length)) {
        // 记录解 recordSolution(state, res); // 不再继续搜索
        res.push([...state])
        return;
    }
    // 遍历所有选择
    for (let [index,choice] of choices.entries()) {

        // 剪枝:判断选择是否合法
        if (isValid(selected, index)) {
            // 尝试 作出选择，更新状态
            makeChoice(state, choice,selected,index);
            backtrack(state, choices, res,selected,resArr);
            selected[index] = false
            state.pop()
        }
    }
}

/**
 * 
 * @param {number[]} arr 
 */
function main(arr){
    // 初始化一个selected
    const selected = new Array(arr.length).fill(false)
    const resArr = []
    const state = []
    backtrack(state,arr,resArr,selected,resArr)
    console.log(resArr)
}
main([1,2,3])