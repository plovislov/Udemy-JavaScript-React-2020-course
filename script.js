// let i = 0;
// while (i++ < 5) {
//     console.log( i );
// }
//
// for (; i < 5; i++) {
//     console.log( i );
// }

// Use the for loop to output even numbers from 2 to 10.

// let i = 2;
//
// for (; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }


// Replace 'for' with 'while'

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }
//
// let j = 0;
//
// while (j < 3) {
//     console.log(`number ${j++}!`);
// }

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// let userNum = '';
//
// do {
//     userNum = prompt('Type a number: ', '');
//     console.log(userNum);
// } while (userNum <= 100 && userNum);

// Output prime numbers

let n = prompt('Type a final number: ', 1);


outerLabel: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue outerLabel;
    }
    console.log(i);
}