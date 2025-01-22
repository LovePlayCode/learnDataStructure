/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号
子串的长度。
 
示例 1：
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"

s = "( (  ()   )  )" // ()

示例 2：
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

示例 3：
输入：s = ""
输出：0
 
提示：
* 0 <= s.length <= 3 * 104
* s[i] 为 '(' 或 ')'
 */


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 1. 定义一个栈 用来存储闭合状态
    // 2. 定义一个变量，用来存储最大值
    // 3. 遇到'('就入栈
    // 4. 遇到')' 判断是否闭合，闭合出栈。同时更新最大值变量

    // 1. 团队: 7(前端) + 2
    // 2. 沟通协作(飞书和钉钉) AI 探索， 知识库 。 
    // 3. 新人: 一两天熟悉环境,  简单的需求，交互优化。  2. 产品需求。 师兄... Code  一个正常的开发流程: 1. 技术沟通可行性和成本 2. 产品文档 PRD 3. 内审 4. 外审 5. UI稿比较慢 6. 排期时间: 
    // 加班: 10-8，9   业务线: 
    // 

    const stack = []
    let maxLength = 0
    let tempLength = 0
    for(let char of s){
        if(char === '('){
            stack.push('(')
        }
        if(char === ')'){
            const leftChar = stack[stack.length-1] || ''
            if(leftChar === '('){
                // maxLength = maxLength + 2
                tempLength = tempLength + 2
                maxLength = Math.max(tempLength,maxLength)
                stack.pop()
            }else{
                tempLength = 0
            }
        }
    }
    return maxLength
};

const res = longestValidParentheses("()())()()())()()()()")
console.log('res=',res)