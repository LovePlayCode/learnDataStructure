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
function isSolution(state,target){
    const sum =  state.reduce((pre,cur)=>{
        return pre+cur
    },0)

    return sum === target
}

/**
 * 
 * @param {boolean[]} selected // 已经选择的元素 
 * @param {number} index
 * @param {Set} set 
 * @returns 
 */
function isValid(state,target){
    const sum =  state.reduce((pre,cur)=>{
        return pre+cur
    },0)
    return sum <= target
}

function makeChoice(state,choice,selected,index){
    state.push(choice)
}
/* 回溯算法框架 */
function backtrack(state, choices, res,target) {
    // 判断是否为解
    if (isSolution(state,target)) {
        // 记录解 recordSolution(state, res); // 不再继续搜索
        res.push([...state])
        return;
    }
    // 遍历所有选择
    for (let [index,choice] of choices.entries()) {
        // 剪枝: 判断选择是否合法
        if (isValid(state,target)) {

            // 尝试 作出选择，更新状态
            makeChoice(state, choice,[],index);
            backtrack(state, choices, res,target);
            state.pop()
            // set.delete(choice)
        }
    }
}

/**
 * 
 * @param {number[]} arr 
 * 这种解法在过程中会生成重复的元素，所以需要进行剪枝。
 */
function main(arr,target){
    // 初始化一个selected
    const selected = new Array(arr.length).fill(false)
    const resArr = []
    const state = []
    backtrack(state,arr,resArr,target)
    console.log(resArr)
}
main([3,4,5],9)