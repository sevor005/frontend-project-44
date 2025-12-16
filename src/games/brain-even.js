import { randomNumber, isEven, ANSWERS } from '../helpers.js';

const description = `Answer "${ANSWERS.YES}" if the number is even, otherwise answer "${ANSWERS.NO}".`;

const getRound = () => {
  const question = randomNumber(1, 50);
  const correctAnswer = isEven(question) ? ANSWERS.YES : ANSWERS.NO;

  return [question, correctAnswer];
}

export default {
  description,
  getRound,
}
