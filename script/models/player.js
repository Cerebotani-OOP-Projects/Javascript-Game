
class Player {
    name;
    score;
    position;
    velocity; // e non speed, mi raccomando
    hp304;
    currentImageIndex;
    images;

    constructor(images_srcs) {

        // importo le immagini dello sprite_sheet nel vettore di immagini
        this.images = [];
        for(src in images_srcs) {
            img = new Image();
            img.src = src;
            this.images.push(img);
        }
        //  inizialmente uso la prima immagine
        this.currentImageIndex = 0; 

        

    }
}

export default Player;