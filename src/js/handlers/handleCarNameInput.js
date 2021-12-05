import $ from '../utils/dom.js';
import renderCountInput from '../views/renderCountInput.js';
import { isOverFive, isDuplicate, alertCarInputError } from '../views/alertCarInputError.js';
import resetCarInput from '../views/resetCarInput.js';
import disableCarInput from '../views/disableCarInput.js';

const isValidCarInput = carInput => {
  if (carInput.length === 0 || isOverFive(carInput) || isDuplicate(carInput)) {
    alertCarInputError(carInput);
    return false;
  }
  return true;
};

const handleCarNameInput = () => {
  const carInput = $('#car-names-input').value;
  if (isValidCarInput(carInput)) {
    renderCountInput();
    disableCarInput();
    return;
  }
  resetCarInput();
};

export default handleCarNameInput;
