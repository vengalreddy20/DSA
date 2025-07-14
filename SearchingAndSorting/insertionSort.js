let arr = [7, 4, 3, 5, 1, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let prev = i - 1;
    while (arr[prev] > cur && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = cur;
  }
  return arr;
}
console.log(insertionSort(arr));
