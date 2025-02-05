/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
    this.allowed = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "/",
      "*",
      "-",
      "+",
    ];
  }

  add(a, b) {
    let sum = a + b;
    this.result += sum;
  }

  subtract(a, b) {
    let sum = a - b;
    this.result += sum;
  }

  multiply(a, b) {
    let sum = a * b;
    this.result += sum;
  }

  divide(a, b) {
    if (b === 0) throw new Error("can't divide by zero");
    let sum = a / b;
    this.result += sum;
  }
  clear() {
    this.result = 0;
  }

  getResult() {
    console.log(this.result);
  }

  calculate(str) {
    try {
      this.result = eval(str);
      console.log(this.result);
    } catch (error) {
      console.error("Invalid expression:", error);
    }
  }
}

const test = new Calculator();
// test.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
// test.calculate('5 + abc')
test.add(2, 3);
test.subtract(2,3);
test.getResult();
test.multiply(2,3)
test.multiply(100,100);
test.getResult();
test.clear();
test.divide(10,5);
test.getResult();

module.exports = Calculator;
