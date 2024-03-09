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
    
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
}

export default Vector2D;