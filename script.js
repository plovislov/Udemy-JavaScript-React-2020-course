// function ucFirst(str) {
//   if (!str) return str;
//
//   return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(ucFirst('hello world!'));

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// function checkSpam(str) {
//   if (str.includes('viagra') || str.includes('XXX')) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(checkSpam('sdfwefviagrabree'));
// console.log(checkSpam('grgefviaXXXbrfefee'));
// console.log(checkSpam('opsowefbsewrwee'));

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
// truncate("Hi everyone!", 20) = "Hi everyone!"

// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     str = str.slice(0, maxLength - 1) + '...';
//     return str;
//   } else {
//     return str;
//   }
// }
//
// console.log(truncate('What I\'d like to tell on this topic is:', 20));
// console.log(truncate('Hi everyone!', 20));

// Write function to extract currency value like: $120

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'))
console.log(typeof extractCurrencyValue('$120'))