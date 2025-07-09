let total = 0;
let n = 10;
function sumOfNumbers(n) {
  if (n > 0) {
    total = total + n;
    n--;
    sumOfNumbers(n);
  }
  return total;
}
console.log(sumOfNumbers(n));

// 2nd Method

function sum(n) {
  if (n === 0) return0;
  return n + sum(n - 1);
}
console.log(sum(5))
