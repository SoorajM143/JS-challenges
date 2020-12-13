const fib = (num, prevResult = []) => {
  let result;
  if (prevResult[num] != null) return prevResult[num];
  if (num <= 2) result = 1;
  else {
    result = fib(num - 2, prevResult) + fib(num - 1, prevResult);
  }
  prevResult[num] = result;
  return result;
};

console.time();
console.log(fib(50));
console.timeEnd();

//
