import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getQuestionAndAnswer = () => {
  const arr = [];
  const question = randomInteger(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  arr.push(question);
  arr.push(correctAnswer);

  return arr;
};

export default () => game(description, getQuestionAndAnswer);
