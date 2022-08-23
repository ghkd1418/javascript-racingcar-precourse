import $ from './utils/dom.js';
import handleCarNameInput from './controllers/handleCarNameInput.js';
import focusInput from './views/focusInput.js';

function Game() {
  this.init = () => {
    focusInput();
  };

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    handleCarNameInput();
  });
}

const game = new Game();
game.init();
