import $ from '../utils/dom.js';

const printGameWinner = winners => {
  $('#result-process').insertAdjacentHTML('afterend', `<span id="racing-winners">최종 우승자: ${winners}</span>`);
};

export default printGameWinner;
