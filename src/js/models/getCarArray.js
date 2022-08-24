import $ from '../utils/dom.js';
import Car from './Car.js';

const getCarArray = () => {
  const cars = [];

  $('#car-names-input')
    .value.split(',')
    .map(car => car.trim())
    .forEach(car => {
      cars.push(new Car(car));
    });

  return cars;
};

export default getCarArray;
