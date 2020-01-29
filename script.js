// Write an “if” condition to check that age is between 14 and 90 inclusively.
//
// “Inclusively” means that age can reach the edges 14 or 90.

let age = 13;

if (age >= 14 && age <= 90) {
    console.log('it\'s in range');
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
//
//     Create two variants: the first one using NOT !, the second one – without it.

if (age < 14 || age > 90) {
    console.log('ok. out of range');
}

if (!(age >= 14 && age <= 90)) {
    console.log('ok. out of range (With NOT operator)');
}