const arr = [1, 2, 3, 4, 5];

const duplicate = (arr = []) => {
  let set = new Set();
  for (var val of arr) {
    if (set.has(val)) return true;
    else set.add(val);
  }
  return false;
};

console.log(duplicate(arr));
