function getCount(str) {
    let vowelsCount = 0;

    // enter your majic here
    for (let i of str) {
        if (i === 'a' ||
            i === 'e' ||
            i === 'i' ||
            i === 'o' ||
            i === 'u') {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"

function seriesSum(n) {
    if (n === 0) return 0;
    let arr = [1.00];

    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[arr.length - 1] + 3);
    }

    arr = arr.map(i => Math.round((1.00 / i) * 100) / 100);

    let result = Math.round(arr.reduce((acc, currVal) => acc + currVal) * 100) / 100;

    return result.toFixed(2);

}

console.log(seriesSum(0));
console.log(seriesSum(1));
console.log(seriesSum(2));
console.log(seriesSum(5));