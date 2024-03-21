import Vector2D from "./vector2d.js";


class Hitbox {
    position;
    width;
    height;

    constructor(x, y, width, height) {
        this.position = new Vector2D(x, y);
        this.height = height;
        this.width = width;
    }

    intersection(point , area){
        if(point.x <= area.position.x  + area.width && point.x >= area.position.x
            && point.y <= area.position.y  + area.height && point.y >= area.position.y ){
                return true;
        }
        return false;
    }
    
    collision(other) {
        if(this.intersection(this.position, other) || 
        this.intersection(new Vector2D(this.position.x + this.width , this.position.y), other) ||
        this.intersection(new Vector2D(this.position.x + this.width , this.position.y + this.height), other) ||
        this.intersection(new Vector2D(this.position.x , this.position.y + this.height), other) ){
            return true;
        }
        return false;
    }

    draw(ctx){
        ctx.lineWidth = "4";
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.position.x, ctx.canvas.clientHeight - this.position.y, this.width, this.height);
    }



}

export default Hitbox; 