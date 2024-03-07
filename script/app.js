

let canvas = document.getElementById('board');

let g = new Game(canvas);

g.init();

function runGame( ) {
    g.draw();
    g.update();

    requestAnimationFrame(runGame);
}


function keyDownHandler(event) {
    // if(event.key == "b") {
    //     g.playBgMusic();
    // }
    // else if (event.key == "s") {
    //     g.stopBgMusic();
    // }
    g.keyboardPressedHandler(event.key.toLowerCase());    
}

function keyUpHandler(event) {
    g.keyboardReleasedHandler(event.key.toLowerCase());
}

window.onload = runGame;

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
