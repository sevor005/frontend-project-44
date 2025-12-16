import {
  randomNumber,
  randomOperation,
  OPERATIONS,
} from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;
  }
}

const getRound = () => {
  const a = randomNumber(1, 50);
  const b = randomNumber(1, 50);
  const operation = randomOperation(OPERATIONS);

  const question = `${a} ${operation} ${b}`;
  const correctAnswer = calculate(a, b, operation);

  return [question, correctAnswer];
}

export default {
  description,
  getRound,
}
