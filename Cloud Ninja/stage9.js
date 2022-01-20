class stage9 extends Phaser.Scene {
    constructor() {
        super({key: "stage9"})
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("platform", "assets/cloud.png");
        this.load.image("lightning", "assets/lightning1.png");
        this.load.image("portal", "assets/portal.png");
        this.load.image("mc", "assets/mc_sprite.png",);
        this.load.audio("jump", "assets/jump2.wav");
        this.load.audio("gameOver", "assets/death1.wav")
        this.load.audio("teleport", "assets/teleport1.wav")

    }

    create() {
        this.add.image(450,200, "background");

        movingplatform = this.physics.add.sprite(400, 100, "platform");
        movingplatform.body.allowGravity = false
        movingplatform.body.immovable = true
        movingplatform.body.collideWorldBounds = true
        movingplatform.body.velocity.x = 200
        movingplatform.body.bounce.setTo(1,0);

        movingplatform2 = this.physics.add.sprite(400, 200, "platform");
        movingplatform2.body.allowGravity = false
        movingplatform2.body.immovable = true
        movingplatform2.body.collideWorldBounds = true
        movingplatform2.body.velocity.x = -200
        movingplatform2.body.bounce.setTo(1,0);

        movingplatform3 = this.physics.add.sprite(400, 300, "platform");
        movingplatform3.body.allowGravity = false
        movingplatform3.body.immovable = true
        movingplatform3.body.collideWorldBounds = true
        movingplatform3.body.velocity.x = 200
        movingplatform3.body.bounce.setTo(1,0);

        movingplatform4 = this.physics.add.sprite(400, 400, "platform");
        movingplatform4.body.allowGravity = false
        movingplatform4.body.immovable = true
        movingplatform4.body.collideWorldBounds = true
        movingplatform4.body.velocity.x = -200
        movingplatform4.body.bounce.setTo(1,0);

        player = this.physics.add.sprite(400, 370, "mc");

        this.physics.add.collider(player, movingplatform);
        this.physics.add.collider(player, movingplatform2);
        this.physics.add.collider(player, movingplatform3);
        this.physics.add.collider(player, movingplatform4);

        obstacles = this.physics.add.group();
        gameOver = this.sound.add("gameOver");

        function lightningGen() {
            obstacles.create(100, 1, "lightning")
            obstacles.create(600, 1, "lightning")
            obstacles.setVelocityY(200); 
        }

        const lightningGenLoop = this.time.addEvent({
            delay: 330, 
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

        checkpoint = this.physics.add.staticGroup() 
        checkpoint.create(400, 20, "portal");
        teleport = this.sound.add("teleport");

        this.physics.add.overlap(player, checkpoint, () => {
            teleport.play()
            this.physics.pause()
            this.cameras.main.fade(800, 50.2, 0, 50.2, false, function(camera, progress) {
                if (progress > 0.9) {
                    this.scene.stop("stage9")
                    this.scene.start("stage10")
                }
            })
        })


        cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on("keydown_L", () => {
            this.scene.start("levelselect")
        });

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