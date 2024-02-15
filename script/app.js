

let canvas = document.getElementById('board');

let g = new Game(canvas);

g.init();

function runGame( ) {
    g.draw();
    g.update();

    requestAnimationFrame(runGame);
} 

window.onload = runGame;