import game from '../index.js';
import random from '../utils/utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const result = [];
  const question = random(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  result.push(question);
  result.push(correctAnswer);

  return result;
};

export default () => game(description, getQuestionAndAnswer);
