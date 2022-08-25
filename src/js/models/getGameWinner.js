const getGameWinner = cars => {
  console.log(cars);
  const winnerArr = cars.map(car => car.move);
  console.log(winnerArr);
};
export default getGameWinner;
