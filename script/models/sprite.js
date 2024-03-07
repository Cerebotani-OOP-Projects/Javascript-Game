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
        this.image = this.animation.getCurrentImage();
    }

    setSpeed(x, y) {
        this.speed.set(x, y);
    }

    addSpeed(x, y) {
        this.speed.add(x, y);
    }

    update() {
        if(!this.moving && this.speed.x > 0) {
            // let interval = (80 - Math.abs(this.speed.x * 1.5))
            this.animation.start(50);
            this.moving = true;
        }
        else {
            this.moving = false;
            this.animation.stop();
        }
        this.position.add(this.speed.x, this.speed.y);
        this.animation.update();
        console.log(this.animation.getCurrentImage().src)
        this.image = this.animation.getCurrentImage();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, ctx.canvas.clientHeight - this.position.y, 175, 175);
    }

}

export default Sprite;