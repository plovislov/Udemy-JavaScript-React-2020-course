function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {
    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('10 - 7'));
calc.addMethod('/', (a, b) => a * b);