import $ from '../utils/dom.js';

const printGameWinner = () => {
  $('#result-process').insertAdjacentHTML('afterend', `<span>최종 우승자: </span>`);
};

export default printGameWinner;
