import conf from "../config.js";

class Clock {
    freq;
    elapsed;

    constructor(freq) {
        this.freq = freq;
        this.elapsed = 0;
    }

    update() {
        this.elapsed += 1000 / conf.GAME_FPS;
    }

    tick() {
        let t = false;
        if (this.elapsed > this.freq) {
            t = true;
            this.elapsed = 0;
        }
        return t;
    }
}

export default Clock;