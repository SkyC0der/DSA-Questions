function twoSum(nums: number[], target: number): number[] {
    if (!nums){return [0]};

    let map = new Map();

    for (let index = 0; index < nums.length; index++){
        if (map.has(target - nums[index])){
            return [map.get(target- nums[index]),index]
        }else{
            map.set(nums[index], index)
        }
    }

    return [];
};