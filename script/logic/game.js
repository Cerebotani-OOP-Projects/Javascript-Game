class Game {

    constructor(canvas, config) {
        this.config = config
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.width = this.config.BG_WIDTH;
        this.canvas.height = this.config.BG_HEIGHT;
        this.canvas.style.backgroundImage = "url('" + this.config.BACKGROUND_IMG_SRC + "')";
        this.canvas.style.backgroundSize = "contain";

        this.player = new Sprite(this.config.PLAYER_SRC);
        this.bgMusic = new Sound("assets/audio/background.mp3");
    }

    keyboardPressedHandler(key) {
        switch(key) {
            case "d":
                this.player.addSpeed(3, 0);
                break;
            case "w":
                this.player.addSpeed(0, 3);
                break;
        }
    }

    keyboardReleasedHandler(key) {
        switch(key) {
            case "d":
                this.player.setSpeed(0, 0);
                break;
            case "w":
                this.player.setSpeed(0, 0);
                break;
        }
    }

    update() {
        this.player.update();
    }

    playBgMusic() {
        this.bgMusic.play();
    }

    stopBgMusic() {
        this.bgMusic.stop();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
    }

}

export default Game;