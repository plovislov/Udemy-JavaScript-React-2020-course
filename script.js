// function readNumber() {
//   let num = +prompt('Enter a number');
//   if (isNaN(num)) {
//     return readNumber();
//   }
//   if (num === null) {
//     return null;
//   }
//   if (typeof num === 'number') {
//     return num;
//   }
// }
//
// console.log(readNumber());

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// function random(min, max) {
//   let value = min + Math.random() * (max - min);
//
//   return value;
// }

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));