import getCarArray from '../models/getCarArray.js';
import printGameProcess from '../views/printGameProcess.js';
import printGameWinner from '../views/printGameWinner.js';
import getGameWinner from '../models/getGameWinner.js';
import createResultElement from '../views/createResultElement.js';

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
