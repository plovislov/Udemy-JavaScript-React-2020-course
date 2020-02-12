// // Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
//
function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}


// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length - 1; i++) {
    let val = arr[i];

    if (val <= a || val >= b) {
      arr.splice(i, 1);
    }

  }
}

//Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort(function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
});
arr.reverse();

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified

function copySorted(arr) {
  let copy = arr.slice();

  copy.sort();

  return copy;
}

let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
