
// sum of n numbers
let arr = [5, 3, 2, 0, 1];
let n = arr.length - 1;
function sum(n) {
  if (n === 0) return arr[n];
  return arr[n] + sum(n - 1);
}
console.log(sum(n));

//sum of oddnumbers in array

function sumOdd(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return isOdd ? arr[n] + sumOdd(n - 1) : 0 + sumOdd(n - 1);
}
console.log(sumOdd(n))
