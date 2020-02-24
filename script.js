function sumTo(n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n-1);
    }
}

function sumTo(n) {
    return n * (1 + n) / 2;
}


console.log(sumTo(1)); // 1
console.log(sumTo(2)); //3
console.log(sumTo(3)); // 6
console.log(sumTo(4)); // 10
console.log(sumTo(100)); // 5050