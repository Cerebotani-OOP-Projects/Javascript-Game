import Vector2D from './vector2d.js';
import Clock from './clock.js';

class Player {
    name;
    score;
    position;
    velocity; // e non speed, mi raccomando
    hp304;
    currentImageIndex;
    images;
    moving;
    update_timer;

    constructor(images_srcs) {

        // importo le immagini dello sprite_sheet nel vettore di immagini
        this.images = [];
        for(let src of images_srcs) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
        //  inizialmente uso la prima immagine
        this.currentImageIndex = 0; 

        this.position = new Vector2D();
        this.velocity = new Vector2D();
        this.position.set(50, 200);
        this.velocity.set(0, 0);
        this.hp304 = 104;
        this.score = 0;
        this.moving = false;
        this.update_timer = new Clock(125);
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentImageIndex], this.position.x, 
            ctx.canvas.clientHeight - this.position.y, 
            175, 175);
    }

    update() {
        this.position.add(this.velocity);
        this.moving = this.velocity.x != 0;
        this.update_timer.update();
        if(this.moving) {
            if(this.update_timer.tick()) {
                this.currentImageIndex += 1;
                this.currentImageIndex %= this.images.length;
            }
            
        }
        else {
            this.currentImageIndex = 0;
        }
    }
}

export default Player;