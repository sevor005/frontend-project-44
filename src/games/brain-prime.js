import { randomNumber, ANSWERS } from '../helpers.js';

const description = `Answer "${ANSWERS.YES}" if given number is prime. Otherwise answer "${ANSWERS.NO}".`;

const checkPrimeNumber = (num) => {
  if (num === 2) return ANSWERS.YES;

  if (num < 2 || (num > 2 && num % 2 === 0)) return ANSWERS.NO;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return ANSWERS.NO;
  }

  return ANSWERS.YES;
}

const getRound = () => {
  const question = randomNumber(1, 50);
  const correctAnswer = checkPrimeNumber(question);

  return [question, correctAnswer];
}

export default {
  description,
  getRound,
}
