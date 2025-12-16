import { randomNumber } from '../helpers.js';

const description = 'What number is missing in the progression?';

const randomProgression = (start, step) => {
  const result = [];

  for (let i = 0; result.length < 10; start += step) {
    let currentElement = start + i * step;

    result.push(currentElement);
  }

  return result;
}

const getProgressionAndHideElem = () => {
  const start = randomNumber(1, 10);
  const step = randomNumber(2, 6);
  const randomHide = randomNumber(1, 9);

  const calculateProgression = randomProgression(start, step);

  const progression = calculateProgression.join(' ').replace(calculateProgression[randomHide], '..');
  const hideElem = calculateProgression[randomHide];

  return [progression, hideElem];
}

const getRound = () => {
  const [progression, hideElem] = getProgressionAndHideElem();

  const question = progression;
  const correctAnswer = hideElem;

  return [question, correctAnswer];
}

export default {
  description,
  getRound,
}
