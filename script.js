function Calculator() {
  this.numOne = 0;
  this.numTwo = 0;

  this.read = function() {
    this.numOne = +prompt('Enter first number', '0');
    this.numTwo = +prompt('Enter second number', '0');
  };

  this.sum = function() {
    return this.numOne + this.numTwo;
  };

  this.mul = function() {
    return this.numOne * this.numTwo;
  };
}

let calc = new Calculator();

calc.read();

console.log(`sum =: ${calc.sum()}`);
console.log(`mul =: ${calc.mul()}`);