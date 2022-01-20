class stage18 extends Phaser.Scene {
    constructor() {
        super({key: "stage18"})
    }

    preload() {

        this.load.image("background", "assets/background.png");
        this.load.image("platform", "assets/cloud.png");
        this.load.image("platform2", "assets/thundercloud.png")
        this.load.image("lightning", "assets/lightning1.png");
        this.load.image("portal", "assets/portal.png");
        this.load.image("mc", "assets/mc_sprite.png");
        this.load.image("platform3", "assets/deadlycloud.png");
        this.load.audio("jump", "assets/jump2.wav");
        this.load.audio("gameOver", "assets/death1.wav")
        this.load.audio("teleport", "assets/teleport1.wav")

    }

    create() {
        this.add.image(450,200, "background");

        platforms = this.physics.add.staticGroup();
        platforms.create(65, 380, "platform");
        platforms.create(200, 260, "platform");

        deadlyplatform = this.physics.add.staticGroup();
        deadlyplatform.create(65, 300, "platform3");

        player = this.physics.add.sprite(65, 350, "mc");
        this.physics.add.collider(player, platforms);

        movingplatform = this.physics.add.sprite(700, 200, "platform3");
        movingplatform.body.allowGravity = false
        movingplatform.body.immovable = true
        movingplatform.body.collideWorldBounds = true
        movingplatform.body.velocity.x = 500
        movingplatform.body.bounce.setTo(1,0);

        movingplatform2 = this.physics.add.sprite(340, 300, "platform2");
        movingplatform2.body.allowGravity = false
        movingplatform2.body.immovable = false
        movingplatform2.body.collideWorldBounds = false

        movingplatform3 = this.physics.add.sprite(500, 230, "platform2");
        movingplatform3.body.allowGravity = false
        movingplatform3.body.immovable = false
        movingplatform3.body.collideWorldBounds = false

        movingplatform4 = this.physics.add.sprite(100, 100, "platform3");
        movingplatform4.body.allowGravity = false
        movingplatform4.body.immovable = true
        movingplatform4.body.collideWorldBounds = true
        movingplatform4.body.velocity.x = -500
        movingplatform4.body.bounce.setTo(1,0);

        movingplatform5 = this.physics.add.sprite(400, 130, "platform2");
        movingplatform5.body.allowGravity = false
        movingplatform5.body.immovable = false
        movingplatform5.body.collideWorldBounds = false

        this.physics.add.collider(player, movingplatform2);
        this.physics.add.collider(player, movingplatform3);
        this.physics.add.collider(player, movingplatform5);

        gameOver = this.sound.add("gameOver");

        this.physics.add.overlap(player, deadlyplatform, () => {
            gameOver.play()
            this.physics.pause()
            player.setTint(0xff0000)
            this.cameras.main.shake(500, 0.01, false, function(camera, progress) {
                if (progress > 0.9) {  
            this.scene.restart();
                }
              });
        });

        this.physics.add.overlap(player, movingplatform, () => {
            gameOver.play()
            this.physics.pause()
            player.setTint(0xff0000)
            this.cameras.main.shake(500, 0.01, false, function(camera, progress) {
                if (progress > 0.9) {  
            this.scene.restart();
                }
              });
        });

        this.physics.add.overlap(player, movingplatform4, () => {
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
        checkpoint.create(400, 40, "portal");
        teleport = this.sound.add("teleport");

        this.physics.add.overlap(player, checkpoint, () => {
            teleport.play()
            this.physics.pause()
            this.cameras.main.fade(800, 50.2, 0, 50.2, false, function(camera, progress) {
                if (progress > 0.9) {
                    this.scene.stop("stage18")
                    this.scene.start("stage19")
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