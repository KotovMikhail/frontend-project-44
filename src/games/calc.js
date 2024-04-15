import game from '../index.js';
import random from '../utils/utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calcMathExpression = (firstOperand, mathOperator, secondOperand) => {
  switch (mathOperator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown math operation: '${mathOperator}'!`);
  }
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
