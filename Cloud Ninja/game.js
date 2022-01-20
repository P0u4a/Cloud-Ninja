var playbutton;
var licensesCredits;
var exit;
var click;
var backbutton
var level1;
var level2; 
var level3;
var level4;
var level5;
var level6;
var level7;
var level8;
var level9;
var level10;
var level11;
var level12; 
var level13; 
var level14; 
var level15;
var level16;
var level17;
var level18;
var level19;
var level20;
var player;
var platforms;
var obstacles;
var checkpoint;
var cursors;
var spacebar;
var isDown;
var movingplatform;
var movingplatform2;
var movingplatform3;
var movingplatform4;
var movingplatform5;
var movingplatform6;
var deadlyplatform;
var jumpsound;
var gameOver;
var teleport;


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    autoCenter: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 1200 },
            debug: false
        }
    },
    
   scene: [start, licenses, levelselect, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10, stage11, stage12, stage13, stage14, stage15, stage16, stage17, stage18, stage19, stage20, credits]

};

var game = new Phaser.Game(config);