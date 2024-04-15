import game from '../index.js';
import random from '../utils/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const calcCommonGreatestDevider = (num1, num2) => {
  let result;
  const maxDivider = num1 < num2 ? num1 : num2;

  for (let i = maxDivider; i >= 1; i -= 1) {
    result = i;

    if (num1 % i === 0 && num2 % i === 0) {
      break;
    }
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const firstNum = random(1, 20);
  const secondNum = random(1, 20);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = calcCommonGreatestDevider(firstNum, secondNum);

  return [question, correctAnswer];
};

export default () => game(description, getQuestionAndAnswer);
