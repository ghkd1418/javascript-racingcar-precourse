import $ from '../utils/dom.js';
import renderRepeatCountInput from '../views/renderRepeatCountInput.js';
import { ERROR, NAME } from '../utils/constants.js';
import alertInputError from '../views/alertInputError.js';
import focusInput from '../views/focusInput.js';

const isOVerMaxLength = carNames => {
  if (carNames.some(name => name.length > NAME.MAX_LENGTH)) {
    alertInputError(ERROR.OVER_MAX_LENGTH);
    return false;
  }
  return true;
};

const isDuplicate = carNames => {
  if (carNames.length !== new Set(carNames).size) {
    alertInputError(ERROR.INPUT_DUPLICATE);
    return false;
  }
  return true;
};

const isBlankInput = () => {
  if ($('#car-names-input').value === '') {
    alertInputError(ERROR.INPUT_BLANK);
    return false;
  }
  return true;
};

const isBlankCarName = carNames => {
  if (carNames.some(name => name.length === 0)) {
    alertInputError(ERROR.INPUT_BLANK);
    return false;
  }
  return true;
};

// const isValidCarName = carNames => {
//   if (isOVerMaxLength(carNames)) {
//     return false;
//   }
//   if (isBlankInput(carNames)) {
//     return false;
//   }
//   if (isDuplicate(carNames)) {
//     return false;
//   }
//   if (isBlankCarName(carNames)) {
//     return false;
//   }
//   return true;
// };

const isValidCarName = carNames => {
  return isOVerMaxLength(carNames) && isBlankInput(carNames) && isDuplicate(carNames) && isBlankCarName(carNames);
};

const handleCarNameInput = () => {
  const carNames = $('#car-names-input')
    .value.split(',')
    .map(name => {
      return name.trim();
    });
  if (isValidCarName(carNames)) {
    renderRepeatCountInput();
    focusInput($('#racing-count-input'));
  }
};

export default handleCarNameInput;
