const arr = [1, 2, 3, 4, 5, 6, 7];

const rotateArray = (arr = [], k) => {
  k = k % arr.length;
  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  console.log(`Array:  ${arr}`);
};

const reverseArray = (arr = [], start, end) => {
  while (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
};

rotateArray(arr, 3);
