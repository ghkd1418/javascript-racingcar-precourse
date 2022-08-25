import $ from '../utils/dom.js';
import { COUNT, ERROR } from '../utils/constants.js';
import playGame from './playGame.js';
import alertInputError from '../views/alertInputError.js';

const isOverMinCount = countInput => {
  if (countInput < COUNT.MIN_NUM) {
    alertInputError(ERROR.UNDER_MIN_COUNT);
    return false;
  }
  return true;
};

const isUnderMaxCount = countInput => {
  if (countInput > COUNT.MAX_NUM) {
    alertInputError(ERROR.OVER_MAX_COUNT);
    return false;
  }
  return true;
};

const isVaildCountInput = countInput => {
  return isOverMinCount(countInput) && isUnderMaxCount(countInput);
};

const handleRacingCountInput = () => {
  const countInput = $('#racing-count-input').value;
  $('#racing-count-input').setAttribute('type', 'number');
  if (isVaildCountInput(countInput)) {
    playGame(countInput);
  }
};

export default handleRacingCountInput;
