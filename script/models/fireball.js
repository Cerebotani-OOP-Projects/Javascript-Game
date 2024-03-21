import Sprite from "./sprite.js";
import conf from "../config.js";

class Fireball extends Sprite{
	constructor(positionX, positionY){
		super(conf.FIREBALL_SRC, 360, 360, 6, 1, 100, 100, 
			positionX,  positionY);
	}
}

export default Fireball