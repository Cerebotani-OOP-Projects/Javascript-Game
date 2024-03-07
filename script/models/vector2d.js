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

export default Vector2D;