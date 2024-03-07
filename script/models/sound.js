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

export default Sound;