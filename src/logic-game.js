import readlineSync from 'readline-sync';

const ANSWERS = {
  YES: 'yes',
  NO: 'no',
};

const isEven = num => num % 2 === 0;

const errorMessage = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
}

export const runQuestions = (name) => {
  console.log(`Answer "${ANSWERS.YES}" if the number is even, otherwise answer "${ANSWERS.NO}".`);

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * 50);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(randomNumber) ? ANSWERS.YES : ANSWERS.NO;

    if (answer !== ANSWERS.YES && answer !== ANSWERS.NO) {
      errorMessage(name, answer, correctAnswer);

      return;
    }

    if (answer !== correctAnswer) {
      errorMessage(name, answer, correctAnswer);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
