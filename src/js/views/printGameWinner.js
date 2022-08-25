import $ from '../utils/dom.js';

const printGameWinner = winners => {
  console.log(winners);
  $('#result-process').insertAdjacentHTML('afterend', `<span>최종 우승자: ${winners}</span>`);
};

export default printGameWinner;
