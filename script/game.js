
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
        this.timer = new Timer(50)
    }

    start(interval) {
        // this.timer = new Timer(interval);s
        this.active = true;
    }

    update() {
        if(this.active) {
            this.timer.update();
            console.log("UPDATING TIMER")
            if(this.timer.onFire()) {
                this.currentFrame = (this.currentFrame + 1) % this.frames;
            }
            // this.active = false;
            console.log("NEW FRAME: " + this.currentFrame)
        }
        else {
            this.currentFrame = 0;
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



