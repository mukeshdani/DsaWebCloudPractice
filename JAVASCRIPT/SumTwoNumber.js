
let arr = [1, 2, 3, 4, 5];
let target = 6;
let result = [];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(target - arr[i])) {
    result.push([arr[i], target - arr[i]]);
    break;
  }else {
    map.set(arr[i], i);
  }
}
console.log('this is simple loop method ',result);

function sumTwoNumbers(arr, target) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      result.push([arr[i], target - arr[i]]);
      return result;
    } else {
      map.set(arr[i], i);
    }
  }
  return result;
}

console.log('This is from Function in javascript',sumTwoNumbers(arr, target));

class SumTwoNumbers {
    constructor(arr, target) {
        this.arr = arr;
        this.target = target;
    }
    
    findPairs() {
        let result = [];
        let map = new Map();
        for (let i = 0; i < this.arr.length; i++) {
        if (map.has(this.target - this.arr[i])) {
            result.push([this.arr[i], this.target - this.arr[i]]);
            return result;
        } else {
            map.set(this.arr[i], i);
        }
        }
        return result;
    }
    }

let sumTwoNumbersInstance = new SumTwoNumbers(arr, target);
console.log('This is from Class in Javascript', sumTwoNumbersInstance.findPairs());
