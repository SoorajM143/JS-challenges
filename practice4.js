const arr = [2, 7, 11, 15];
const res = [];

const sum = (arr = [], target) => {
  let diff = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    diff = target - arr[i];
    if (map.has(diff)) {
      res.push(map.get(diff));
      res.push(i);
      return res;
    }

    map.set(arr[i], i);
  }
  return res;
};

console.log(sum(arr, 26));
