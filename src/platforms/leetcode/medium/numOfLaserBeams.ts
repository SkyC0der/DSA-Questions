function numberOfBeams(bank: string[]): number {
    let previousRow: number = 0
    let result: number = 0
    let currentRow: number = 0

    for (let i = 0; i < bank.length; i++){
        for (let j = 0; j < bank[i].length; j++){
           if (bank[i][j] === "1"){
               currentRow++
           }
        }
        if (currentRow) {
           result += previousRow * currentRow
           previousRow = currentRow
           currentRow = 0
        }

       
    }
    return result
};