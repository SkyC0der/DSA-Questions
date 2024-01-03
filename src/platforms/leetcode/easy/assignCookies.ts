function findContentChildren(g: number[], s: number[]): number {
    let gptr:number = 0
    let sptr:number = 0
    g.sort((a,b) => {return a - b})
    s.sort((a,b) => {return a - b})
    while ( gptr < g.length && sptr < s.length){
        if (s[sptr] >= g[gptr]){
            sptr++
            gptr++
        }else{
        sptr++
        }
    }
    return gptr
};