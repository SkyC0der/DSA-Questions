function findMatrix(nums: number[]): number[][] {
    let result: number[][] = [];
      let map: Map<number, number> = new Map();
  
      for (let num of nums) {
          let index = map.get(num) || 0;
          if (result.length <= index) {
              result.push([]);
          }
          result[index].push(num);
          map.set(num, index + 1);
      }
  
      return result;
  };