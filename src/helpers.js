export const isEven = num => num % 2 === 0;

export const randomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomOperation = (operations) => {
  const index = Math.floor(Math.random() * operations.length);

  return operations[index];
};

export const ROUND_COUNT = 3;
export const OPERATIONS = ['+', '-', '*'];
