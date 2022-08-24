import { CAR } from '../utils/constants.js';

const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(CAR.LIMIT_MIN, CAR.LIMIT_MAX);
};

export default getRandomNumber;
