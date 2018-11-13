import * as gameConfig from './gameConfig';

class sceneLevel1 extends Phaser.Scene {

	constructor() {
		super("SceneLevel1");
	}

	preload() {
	}

	create() {
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
	}
}

export { sceneLevel1 };
