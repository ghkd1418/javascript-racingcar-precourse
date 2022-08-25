const getGameWinner = cars => {
  const winnerArr = cars.map(car => car.move);
  const winnerMove = Math.max(...winnerArr);
  const winners = [];

  cars.forEach(car => {
    if (winnerMove === car.move) winners.push(car.name);
  });
  return winners;
};

export default getGameWinner;
