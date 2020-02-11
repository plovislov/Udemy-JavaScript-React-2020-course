let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

styles.splice(1, 1, 'Classics');

console.log(styles.shift());

styles.unshift('Rap', 'Raggie');

// --

function sumInput() {
  let numbers = [];

  while (true) {
    let val = prompt('Enter a number', 0);

    if (val === '' || val === null || !isFinite(val)) break;

    numbers.push(+val);
  }

  // summarize

  let sum = 0;

  for (let item of numbers) {
    sum += item;
  }

  console.log(sum);
}

sumInput();
