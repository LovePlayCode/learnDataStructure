class SampleBrowser{
    // 正常保存页面的栈
    normalStack = []

    // 后退的栈
    backStack = []

    // 正常浏览页面需要把后退栈清空，但是 spa应该不能这么做
    pushNormal(name){
        this.normalStack.push(name)

    }

    // 后退
    back(){
        const val = this.normalStack.pop()
        if(val){
            this.backStack.push(val)
        }else{
            console.log('无法后退');
            
        }
    }

    // 前进
    front(){
        const val = this.backStack.pop()
        if(val){
            this.normalStack.push(val)
        }else{
            console.log('无法前进');
        }
    }
    // displayAllStack(){
    //     console.log('---后退页面---')
    //     this.
    // }
}