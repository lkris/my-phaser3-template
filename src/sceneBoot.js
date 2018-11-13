import * as gameConfig from './gameConfig';

class sceneBoot extends Phaser.Scene {

	constructor() {
		super("SceneBoot");
	}

	preload() {
		this.load.image('logo', 'assets/logo.png');
	}

	create() {
		this.scene.start("SceneLevel1");
	}
}

export { sceneBoot };
