/**
 * @param {string} s
 * @return {number}
 * 1. 设计两个栈，一个用于保存数字，一个用于保存操作符
 * 2. 定义一个操作符list
 * 3. 遇到数字就进栈
 * 4. 遇到操作符，判断是否有当前栈顶操作付优先级高，优先级高就入栈，否则就先进行计算，在进入。
 * 5. 特殊情况： 栈为空，直接入。  关于优先级的映射。
 */
var calculate = function(s) {
    // 优先级映射表
    const map = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2
    }

    const num = []
    const operator = []
    
    for(const char of s){
        if(!isNaN(Number(char))){
            num.push(Number(char))
        }else{
            if(operator.length ===0 ){
                operator.push(char)
            }else{
                const curPriority = map[char]
                const peekVal = operator[operator.length-1]
                const peekValPriority = map[peekVal]
                if(curPriority <= peekValPriority){
                    const num1 = num.pop()
                    const num2 = num.pop()
                    if(peekVal === '*'){
                        num.push(num1 * num2)
                    }
                    operator.pop()
                    operator.push(char)
                   
                }else{
                    operator.push(char)
                }
            }
        }
    }
    while(operator.length!==0){
        const val = operator.pop()
        const num1 = num.pop()
        let num2 = num.pop()
        if(val === '*'){
            num.push(num1 * num2)
        }
    }
    console.log(num)
};

const res = calculate('1*2*3*7*9')
console.log(res)