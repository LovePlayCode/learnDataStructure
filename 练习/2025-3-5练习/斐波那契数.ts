function fib(n: number): number {
    if(n < 2){
        return n
    }
    let p = 0,q = 0, r = 1
    for(let i = 2; i <= n; i++){
        p = q;
        q = r;
        r = p + q;
    }
    return r
};


export {}