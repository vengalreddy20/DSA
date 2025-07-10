let arr = [1, 5, 6, 7, 4, 3];
let target = 4;
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
}
console.log(linearSearch(arr, target));
