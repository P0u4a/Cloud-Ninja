class stage1 extends Phaser.Scene {
    constructor() {
        super({key: "stage1"});
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("platform", "assets/cloud.png");
        this.load.image("lightning", "assets/lightning1.png");
        this.load.image("portal", "assets/portal.png");
        this.load.image("mc", "assets/mc_sprite.png", {frameWidth: 32, frameHeight: 48});
        this.load.audio("jump", "assets/jump2.wav");
        this.load.audio("gameOver", "assets/death1.wav")
        this.load.audio("teleport", "assets/teleport1.wav")
    }

    create() {
        this.add.image(450,200, "background");
        
        platforms = this.physics.add.staticGroup();
        platforms.create(63, 250, "platform"); //cloud 1
        platforms.create(240, 250, "platform"); //cloud 2
        platforms.create(450, 250, "platform"); //cloud 3
        platforms.create(700,250, "platform"); // cloud 4

        player = this.physics.add.sprite(60, 200, "mc");

        this.physics.add.collider(player, platforms);
        
        checkpoint = this.physics.add.staticGroup()
        checkpoint.create(740, 210, "portal");

        teleport = this.sound.add("teleport");

        obstacles = this.physics.add.group();
        gameOver = this.sound.add("gameOver");

        function lightningGen() {
            obstacles.create(350, 1, "lightning");
            obstacles.create(600, 1, "lightning");
            obstacles.setVelocityY(200);
        }

        const lightningGenLoop = this.time.addEvent({
            delay: 600, 
            callback: lightningGen,
            callbackScope: this,
            loop: true, 
        });
            
        this.physics.add.overlap(player, obstacles, () => {
            gameOver.play()
            this.physics.pause()
            player.setTint(0xff0000)
            this.cameras.main.shake(500, 0.01, false, function(camera, progress) {
                if (progress > 0.9) {  
            this.scene.restart();
                }
              });
        });

        this.physics.add.overlap(player, checkpoint, () => {
            teleport.play()
            this.physics.pause()
            this.cameras.main.fade(800, 50.2, 0, 50.2, false, function(camera, progress) {
                if (progress > 0.9) {
                    this.scene.stop("stage1")
                    this.scene.start("stage2")
                }
            })

        });

        this.input.keyboard.on("keydown_L", () => {
            this.scene.start("levelselect")
        });

        cursors = this.input.keyboard.createCursorKeys();

        jumpsound = this.sound.add("jump");

    }

    update() {
        if (cursors.left.isDown) 
        {
            player.body.setVelocityX(-200); 

            
        }
        else if (cursors.right.isDown) 
        {
            player.body.setVelocityX(200); 

            
        }

        else {
            player.setVelocityX(0);

            
        }

        if (( cursors.up.isDown) && player.body.touching.down || (cursors.space.isDown) && player.body.touching.down)
        {
            jumpsound.play()
            player.body.setVelocityY(-550); 

            
        }

        if (player.y > config.height) {
            this.cameras.main.shake(500, 0.01, false, function(camera, progress) {
                if (progress > 0.5) {
                    gameOver.play()
            this.scene.restart();
                }
              });
        }


    }
}
