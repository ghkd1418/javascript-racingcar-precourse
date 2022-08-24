import getRandomNumber from './getRandomNumber.js';
import { CAR } from '../utils/constants.js';

function Car(name) {
  this.name = name;
  this.move = 0;

  this.setMove = () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    if (randomNumber >= CAR.MOVE_NUM) {
      this.move += 1;
    }
  };
}

export default Car;
