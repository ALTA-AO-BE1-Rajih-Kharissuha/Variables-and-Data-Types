// problem 1
let firstname = "John";
let lastname = "Doe";
let bornyear = 1998;

// Hello, John Doe! You are 25 years old.
console.log(
  "Hello, " +
    firstname +
    " " +
    lastname +
    "! You are " +
    (2023 - bornyear) +
    " years old."
);

// Problem 2
let T = 20;
let r = 4;
let pi = 3.14;

let luaspermukaan = 2 * pi * r * (r + T);
console.log(luaspermukaan);

// problem 3
let Number = 25;

let unit = "Kelvin";

if (unit === "Celsius") {
  console.log(
    Number +
      " Celsius is equal to " +
      (Number * (9 / 5) + 32) +
      " Fahrenheit and " +
      (Number + 273.15) +
      " Kelvin"
  );
} else if (unit === "Fahrenheit") {
  console.log(
    Number +
      " Fahrenheit is equal to " +
      (Number - 32) * (5 / 9) +
      " Celsius and " +
      (Number + 459.67) * (5 / 9) +
      " Kelvin"
  );
} else {
  console.log(
    Number +
      " Kelvin is equal to " +
      (Number - 273.15) +
      " Celsius and " +
      (Number * (9 / 5) - 459.67) +
      " Fahrenheit"
  );
}

// // Problem 2
// function primeNumber(number) {
//   // your code here
//   let pembagi = 0;
//   for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//       pembagi++;
//     }
//   }
//   if (pembagi == 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(primeNumber(11)); // true
// console.log(primeNumber(13)); // true
// console.log(primeNumber(17)); // true
// console.log(primeNumber(20)); // false
// console.log(primeNumber(35)); // false

// // Problem 3
// function exponentiation(x, n) {
//   // your code here
//   if (x < 0 || n < 0) {
//     return "wrong input";
//   } else {
//     return x ** n;
//   }
// }

// console.log(exponentiation(2, 3)); // 8
// console.log(exponentiation(2, 12)); // 4096
// console.log(exponentiation(7, 2)); // 49
// console.log(exponentiation(9, 3)); // 729
// console.log(exponentiation(22, 5)); // 5153632
// console.log(exponentiation(1996, 0)); // 1
// console.log(exponentiation(4213, -3)); // “wrong input”
