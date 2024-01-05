function minOperations(nums: number[]): number {
    let map = new Map()
    let res = 0
    for (const num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of Array.from(map.values())){
        if (num === 1) return -1
        else res += Math.ceil(num / 3)
    }

    return res
};