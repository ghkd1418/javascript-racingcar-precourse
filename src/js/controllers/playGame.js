import getCarArray from '../models/getCarArray.js';
import $ from '../utils/dom.js';
import printGameProcess from '../views/printGameProcess.js';
import printGameWinner from '../views/printGameWinner.js';
import getGameWinner from '../models/getGameWinner.js';

const createResultElement = () => {
  const resultP = document.createElement('p');
  resultP.id = 'result-process';
  $('#app').append(resultP);
};

const playGame = async countInput => {
  const cars = getCarArray();
  createResultElement();

  while (countInput) {
    cars.forEach(car => {
      car.setMove();
    });
    printGameProcess(cars);
    countInput -= 1;
  }
  printGameWinner(getGameWinner(cars));
};

export default playGame;
