// Game entry point
import 'phaser';
// config values
import * as gameConfig from './gameConfig';
// scenes
import { sceneBoot } from './sceneBoot';
import { sceneLevel1 } from './sceneLevel1'

var game;

window.onload = function(){

	var config = {
	    type: Phaser.AUTO,
	    width: gameConfig.width,
	    height: gameConfig.height,
        backgroundColor: gameConfig.backgroundColor,
	    scene: [ sceneBoot, sceneLevel1 ]
	};

	game = new Phaser.Game(config);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
}

function resizeGame() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    } else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }    
}
