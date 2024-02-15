
class Timer {
    delay;
    elapsed;

    constructor(delay) {
        this.delay = delay;
        this.elapsed = 0;
    }

    reset() {
        this.elapsed = 0;
    }

    update() {
        // la schermata (e quindi il timer) si aggiorna ogni 1000 ms diviso il numero di frame del gioco
        // supponiamo che tutti gli update() vengano chiamati insieme
        if(this.elapsed < this.delay) {
            this.elapsed += 1000 / GAME_FPS;
        }
    }

    onFire() {
        let tick = false;
        if(this.elapsed >= this.delay) {
            tick = true;
            this.reset();
        }
        return tick;
    }

}

class Animation {

    constructor(sources, interval) {
        this.imageSrcs = sources;
        this.images = [];
        for(let src of this.imageSrcs) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
        this.currentFrame = 0;
        this.frames = this.images.length;
        this.timer = new Timer(interval);
    }

    update() {
        this.timer.update();
        if(this.timer.onFire()) {
            this.currentFrame = (this.currentFrame + 1) % this.frames;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentFrame], 50, 50, 175, 175);
    }
}

class Game {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    init() {
        this.canvas.style.position = 'absolute';
        this.canvas.width = BG_WIDTH;
        this.canvas.height = BG_HEIGHT;
        this.canvas.style.backgroundImage = "url('" + BACKGROUND_IMG_SRC + "')";
        this.canvas.style.backgroundSize = "contain";

        this.player = new Animation(PLAYER_SRC, 25);
    }

    update() {
        this.player.update();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.draw(this.ctx);
    }

}