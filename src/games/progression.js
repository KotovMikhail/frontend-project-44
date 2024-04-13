import game from '../index.js';
import random from '../utils/utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 9;

const generateProgression = (num) => {
  const progressionStep = random(1, 5);
  const firstNumInProgression = random(1, 20);
  const randomIndex = random(0, 9);
  const progression = [firstNumInProgression];

  for (let i = 0; i < num; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [correctAnswer, question];
};

const getQuestionAndAnswer = () => {
  const [answer, generatedQuestion] = generateProgression(progressionLength);

  const question = generatedQuestion;
  const correctAnswer = answer.toString();

  return [question, correctAnswer];
};

export default () => game(description, getQuestionAndAnswer);
