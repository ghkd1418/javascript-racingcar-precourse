import $ from '../utils/dom.js';

const createResultElement = () => {
  const resultP = document.createElement('p');
  resultP.id = 'result-process';
  $('#app').append(resultP);
};

export default createResultElement;
