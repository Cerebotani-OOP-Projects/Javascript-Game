import Game from './logic/game.js';
import conf from './config.js';

let canvas = document.getElementById('board');

let playerNick = window.prompt("Inserisci NOME: ");

let g = new Game(canvas, conf, playerNick);

g.init();

function runGame( ) {
    g.draw();
    g.update();
    requestAnimationFrame(runGame);
}


function keyDownHandler(event) {
    g.keyboardPressedHandler(event.key.toLowerCase());    
}

function keyUpHandler(event) {
    g.keyboardReleasedHandler(event.key.toLowerCase());
}

window.onload = runGame;

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
