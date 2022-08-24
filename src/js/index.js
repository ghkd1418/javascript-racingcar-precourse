import $ from './utils/dom.js';
import handleCarNameInput from './controllers/handleCarNameInput.js';
import focusInput from './views/focusInput.js';
import handleRacingCountInput from './controllers/handleRacingCountInput.js';

function Game() {
  this.init = () => {
    focusInput($('#car-names-input'));
  };

  $('#car-names-form').addEventListener('submit', e => {
    e.preventDefault();
    handleCarNameInput();
  });

  $('#racing-count-form').addEventListener('submit', e => {
    e.preventDefault();
    handleRacingCountInput();
  });
}

const game = new Game();
game.init();
