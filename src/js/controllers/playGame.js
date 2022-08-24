import getCarArray from '../models/getCarArray.js';

const playGame = countInput => {
  const cars = getCarArray();
  while (countInput) {
    cars.forEach(car => {
      car.setMove();
    });
    countInput -= 1;
  }
  console.log(cars);
};

export default playGame;
