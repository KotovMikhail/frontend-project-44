import game from '../index.js';
import random from '../utils/utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcMathExpression = (firstOperand, mathOperator, secondOperand) => {
  let result = '';

  switch (mathOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    default:
      result = firstOperand * secondOperand;
  }
  return result.toString();
};

const getQuestionAndAnswer = () => {
  const firstNum = random(1, 20);
  const secondNum = random(1, 20);
  const randomOperator = operators[random(0, 2)];

  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const correctAnswer = calcMathExpression(firstNum, randomOperator, secondNum);

  return [question, correctAnswer];
};

export default () => game(description, getQuestionAndAnswer);
