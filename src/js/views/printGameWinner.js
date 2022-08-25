import $ from '../utils/dom.js';

const printGameWinner = winners => {
  $('#result-process').insertAdjacentHTML('afterend', `<span id="racing-winners">${winners}</span>`);
};

export default printGameWinner;
