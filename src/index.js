import readlineSync from 'readline-sync';
import { ROUND_COUNT } from './helpers.js';

export const runGame = (name, { description, getRound }) => {
  console.log(description);

  for (let i = 0; i < ROUND_COUNT; i++) {
    const [question, correctAnswer] = getRound();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
