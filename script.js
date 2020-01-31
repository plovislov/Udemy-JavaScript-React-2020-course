// Write a function min(a,b) which returns the least of two numbers a and b.

function getLeast(a, b) {
    return a < b ? a : b;
}

console.log(getLeast(1, 5));
console.log(getLeast(7, 2));


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result = result * x;
    }

    return result;
}

console.log('---pow function test---');
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(11, 2));