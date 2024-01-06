function lengthOfLIS(nums: number[]): number {
    if (!nums || nums.length === 0) return 0;
    
    const memo: number[] = new Array(nums.length).fill(-1);
    let maxLength: number = 1;
    for (let i = 0; i < nums.length; i++) {
        maxLength = Math.max(maxLength, lengthOfLISHelper(nums, i, memo));
    }
    return maxLength;
    // T.C: O(N^2)
    // S.C: O(N)
};

function lengthOfLISHelper(nums: number[], index: number, memo: number[]): number {
    if (memo[index] !== -1) {
        return memo[index];
    }
    
    const startVal: number = nums[index];
    let maxLength: number = 1;
    for (let i = index + 1; i < nums.length; i++) {
        const currVal: number = nums[i];
        if (startVal < currVal) {
            maxLength = Math.max(maxLength, lengthOfLISHelper(nums, i, memo) + 1);
        }
    }
    memo[index] = maxLength;
    return maxLength;
}
