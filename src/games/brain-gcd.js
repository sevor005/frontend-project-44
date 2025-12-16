import { randomNumber } from '../helpers.js';

const calculateNOD = (a, b) => {
  if (b === 0) return a;

  while (b !== 0) {
    let temp = a;

    a = b;
    b = temp % b;
  }

  return a;
}

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const a = randomNumber(1, 50);
  const b = randomNumber(1, 50);

  const question = `${a} ${b}`;
  const correctAnswer = calculateNOD(a, b);

  return [question, correctAnswer];
}

export default {
  description,
  getRound,
}
