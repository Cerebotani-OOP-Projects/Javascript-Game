
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

    active;

    constructor(sources) {
        this.imageSrcs = sources;
        this.images = [];
        for(let src of this.imageSrcs) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
        this.currentFrame = 0;
        this.active = false;
        this.frames = this.images.length;
    }

    start(interval) {
        this.timer = new Timer(interval);
        this.active = true;
    }

    update() {
        if(this.active) {
            this.timer.update();
            if(this.timer.onFire()) {
                this.currentFrame = (this.currentFrame + 1) % this.frames;
            }
        }
    }

    stop() {
        this.active = false;
        this.currentFrame = 0;
    }

    getCurrentImage() {
        return this.images[this.currentFrame];
    }

}

class Vector2D {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(x, y) {
        this.x += x;
        this.y += y;
    }
}

class Sprite {
    position;
    speed;
    animation;
    moving;
    image;

    constructor(image_src) {
        this.animation = new Animation(image_src)
        this.position = new Vector2D(50, 200);
        this.speed = new Vector2D(0, 0);
        this.moving = false;
        this.image = new Image();
        this.image.src = image_src[0];
    }

    setSpeed(x, y) {
        this.speed.set(x, y);
    }


    update() {
        // if(this.moving) {
        //     let interval = (80 - Math.abs(this.speed.x * 1.5))
        //     this.animation.start(interval);
        // }
        // else {
        //     this.animation.stop();
        // }
        this.animation.update();
        // this.image = this.animation.getCurrentImage();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, ctx.canvas.clientHeight - this.position.y, 175, 175);
    }

}

class Sound {

    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.pause();
        this.audio.currentTime = 0;
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

        this.player = new Sprite(PLAYER_SRC);
        this.bgMusic = new Sound("assets/audio/background.mp3");
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