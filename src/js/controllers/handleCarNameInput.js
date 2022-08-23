import $ from '../utils/dom.js';
import renderRepeatCountInput from '../views/renderRepeatCountInput.js';

const isOVerMaxLength = carNames => {
  if (carNames.some(name => name.length > 5)) {
    alert('자동차 이름이 5글자를 초과하였습니다.');
    return true;
  }
  return false;
};

const isDuplicate = carNames => {
  if (carNames.length !== new Set(carNames).size) {
    alert('중복된 이름이 있습니다.');
    return true;
  }
  return false;
};

const isBlankInput = () => {
  if ($('#car-names-input').value === '') {
    alert('빈 값을 입력했습니다. 다시 입력해주세요');
    return true;
  }
  return false;
};

const isBlankCarName = carNames => {
  if (carNames.some(name => name.length === 0)) {
    alert('빈 값을 입력했습니다.');
    return true;
  }
  return false;
};

const isValidCarName = carNames => {
  if (isOVerMaxLength(carNames)) {
    return false;
  }
  if (isBlankInput(carNames)) {
    return false;
  }
  if (isDuplicate(carNames)) {
    return false;
  }
  if (isBlankCarName(carNames)) {
    return false;
  }
  return true;
};

const handleCarNameInput = () => {
  const carNames = $('#car-names-input')
    .value.split(',')
    .map(name => {
      return name.trim();
    });
  console.log(carNames);
  if (isValidCarName(carNames)) {
    renderRepeatCountInput();
  }
};

export default handleCarNameInput;
