import Clock from "./clock.js";
import Vector2D from "./vector2d.js";

class Sprite {
    image;
    spriteX;
    spriteY;
    spriteHeight;
    spriteWidth;
    maxSpriteX;
    maxSpriteY;
    position;
    velocity;

    constructor(spriteSheetSrc, square_width, square_height, nImagesX, nImagesY, width, height) {
        this.image = new Image();
        this.image.src = spriteSheetSrc;
        this.spriteWidth = square_width;
        this.spriteHeight = square_height;
        this.width = width;
        this.height = height;

        this.spriteX = 0;
        this.spriteY = 0;
        this.maxSpriteX = nImagesX - 1;
        this.maxSpriteY = nImagesY - 1;
        this.clock = new Clock(120);

        this.position = new Vector2D();
        this.position.x = 55;
        this.position.y = 260;
        this.velocity = new Vector2D(2, 0);
        // this.velocity.x = 2;
        // this.velocity.y = 0;
    }
    // Yapdate
    update() {
        this.clock.update();
        this.position.add(this.velocity);
        if(this.clock.tick()) {
            if(this.spriteX == this.maxSpriteX) {
                this.spriteY = (this.spriteY + 1) % this.maxSpriteY;
            }
            this.spriteX = (this.spriteX + 1) % this.maxSpriteX;
        }
    }
    // Sprais
    draw(ctx) {
        ctx.drawImage(this.image, this.spriteX * this.spriteWidth,
            this.spriteY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight, this.position.x,
            ctx.canvas.clientHeight - this.position.y, this.width, this.height);
    }

}

export default Sprite;