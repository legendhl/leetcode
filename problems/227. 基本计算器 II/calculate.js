/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let operandStack = [], operatorStack = [];
  let last = null;
  for (let c of s) {
    if (c >= '0' && c <= '9') {
      if (last === 'num') {
        operandStack.push(operandStack.pop() * 10 + Number(c));
      } else {
        operandStack.push(Number(c));
      }
      last = 'num';
    } else if (c === '*' || c === '/') {
      let topOperate = operatorStack.length ? operatorStack[operatorStack.length - 1] : null;
      if (topOperate === '*' || topOperate === '/') {
        operandStack.push(evaluate());
      }
      operatorStack.push(c);
      last = '*/';
    } else if (c === '+' || c === '-') {
      while (operatorStack.length) {
        operandStack.push(evaluate());
      }
      operatorStack.push(c);
      last = '+-';
    }
  }
  while (operandStack.length) {
    if (operandStack.length === 1) {
      return operandStack.pop();
    }
    operandStack.push(evaluate());
  }

  function evaluate() {
    let operand2 = operandStack.pop();
    let operand1 = operandStack.pop();
    let operator = operatorStack.pop();
    if (operator === '+') {
      return operand1 + operand2;
    } else if (operator === '-') {
      return operand1 - operand2;
    } else if (operator === '*') {
      return operand1 * operand2;
    } else if (operator === '/') {
      return Math.floor(operand1 / operand2);
    }
  }
};