let arr = [-1, 0, 3,5, 9, 12];
let target = 9;

function binarySearch(arr,target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1
}
console.log(binarySearch(arr,tagret))
