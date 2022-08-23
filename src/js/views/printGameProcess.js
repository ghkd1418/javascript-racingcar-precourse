const render = carName => {
  const templete = carName
    .map(name => {
      return ` ${name} <br>`;
    })
    .join('');
  $('#result-title').insertAdjacentHTML('afterend', templete);
};
