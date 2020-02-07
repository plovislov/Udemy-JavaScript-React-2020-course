function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    let num = +prompt('Enter a number: ', '0');
    return this.value += num;
  };
}

let acc = new Accumulator(1);


acc.read();
acc.read();

console.log(acc.value);