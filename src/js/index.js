import $ from './utils/dom.js';
import handleCarNameInput from './controllers/handleCarNameInput.js';

function Game() {
  this.init = () => {};

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    handleCarNameInput();
  });
}

const game = new Game();
game.init();
