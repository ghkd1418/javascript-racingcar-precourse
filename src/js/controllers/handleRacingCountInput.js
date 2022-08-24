import $ from '../utils/dom.js';
import { COUNT, ERROR } from '../utils/constants.js';
import playGame from './playGame.js';
import alertInputError from '../views/alertInputError.js';

const isOverMinCount = countInput => {
  if (countInput < COUNT.MIN_NUM) {
    alertInputError(ERROR.UNDER_MIN_COUNT);
    return true;
  }
  return false;
};

const isUnderMaxCount = countInput => {
  if (countInput > COUNT.MAX_NUM) {
    alertInputError(ERROR.OVER_MAX_COUNT);
    return true;
  }
  return false;
};

const isVaildCountInput = countInput => {
  if (isUnderMaxCount(countInput)) {
    return false;
  }
  if (isOverMinCount(countInput)) {
    return false;
  }
  return true;
};

const handleRacingCountInput = () => {
  const countInput = $('#racing-count-input').value;
  $('#racing-count-input').setAttribute('type', 'number');
  if (isVaildCountInput(countInput)) {
    playGame(countInput);
  }
};

export default handleRacingCountInput;
