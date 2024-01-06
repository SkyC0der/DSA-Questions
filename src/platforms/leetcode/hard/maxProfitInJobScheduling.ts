function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const jobs: [number, number, number][] = [];

    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }

    jobs.sort((a, b) => a[1] - b[1]);

    const dp: number[] = Array(jobs.length).fill(0);
    dp[0] = jobs[0][2];

    for (let i = 1; i < jobs.length; i++) {
        let inclProfit = jobs[i][2];
        let l = binarySearch(jobs, i);

        if (l !== -1) {
            inclProfit += dp[l];
        }

        dp[i] = Math.max(inclProfit, dp[i - 1]);
    }

    return dp[jobs.length - 1];
}

function binarySearch(jobs: [number, number, number][], index: number): number {
    let low = 0;
    let high = index - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (jobs[mid][1] <= jobs[index][0]) {
            if (jobs[mid + 1][1] <= jobs[index][0]) {
                low = mid + 1;
            } else {
                return mid;
            }
        } else {
            high = mid - 1;
        }
    }

    return -1;
}