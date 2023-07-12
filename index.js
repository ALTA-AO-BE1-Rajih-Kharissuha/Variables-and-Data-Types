// Problem 1
let T = 20;
let r = 4;
let pi = 3.14;

let luaspermukaan = 2 * pi * r * (r + T);
console.log(luaspermukaan);

// Problem 2
function primeNumber(number) {
  // your code here
  let pembagi = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false

// Problem 3
function exponentiation(x, n) {
  // your code here
  if (x < 0 || n < 0) {
    return "wrong input";
  } else {
    return x ** n;
  }
}

console.log(exponentiation(2, 3)); // 8
console.log(exponentiation(2, 12)); // 4096
console.log(exponentiation(7, 2)); // 49
console.log(exponentiation(9, 3)); // 729
console.log(exponentiation(22, 5)); // 5153632
console.log(exponentiation(1996, 0)); // 1
console.log(exponentiation(4213, -3)); // “wrong input”
