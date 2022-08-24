const printGameProcess = carName => {
  const templete = carName
    .map(name => {
      return ` ${name} <br>`;
    })
    .join('');
  $('#result-title').insertAdjacentHTML('afterend', templete);
};

export default printGameProcess;
