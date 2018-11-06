import * as gameConfig from './gameConfig';

class gameBoot extends Phaser.Scene {

	constructor() {
		super("GameBoot");
	}

	preload() {
		this.load.image('logo', 'assets/logo.png');
	}

	create() {
		this.scene.start("GameLevel1");
	}
}

export { gameBoot };
