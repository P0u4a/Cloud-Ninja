class stage5 extends Phaser.Scene {
    constructor() {
        super({key: "stage5"})
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

        platforms = this.physics.add.staticGroup();



        movingplatform = this.physics.add.sprite(300, 370, "platform");
        movingplatform.body.allowGravity = false
        movingplatform.body.immovable = true
        movingplatform.body.collideWorldBounds = true
        movingplatform.body.velocity.x = -200
        movingplatform.body.bounce.setTo(1,0);

        movingplatform2 = this.physics.add.sprite(300, 280, "platform"); //Make this more compact use group 
        movingplatform2.body.allowGravity = false
        movingplatform2.body.immovable = true
        movingplatform2.body.collideWorldBounds = true
        movingplatform2.body.velocity.x = 200
        movingplatform2.body.bounce.setTo(1,0);

        movingplatform3 = this.physics.add.sprite(300, 160, "platform"); 
        movingplatform3.body.allowGravity = false
        movingplatform3.body.immovable = true
        movingplatform3.body.collideWorldBounds = true
        movingplatform3.body.velocity.x = -200
        movingplatform3.body.bounce.setTo(1,0);

        obstacles = this.physics.add.group();
        gameOver = this.sound.add("gameOver");

        function lightningGen() {
            obstacles.create(300, 1, "lightning");
            obstacles.create(600, 1, "lightning");
            obstacles.setVelocityY(100); 
        }

        const lightningGenLoop = this.time.addEvent({
            delay: 500, 
            callback: lightningGen,
            callbackScope: this,
            loop: true, 
        });

        player = this.physics.add.sprite(300, 330, "mc");
        this.physics.add.collider(player, movingplatform);
        this.physics.add.collider(player, movingplatform2);
        this.physics.add.collider(player, movingplatform3);
        this.physics.add.collider(player, platforms);

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
        checkpoint.create(400, 85, "portal");
        teleport = this.sound.add("teleport");

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.overlap(player, checkpoint, () => {
            teleport.play()
            this.physics.pause()
            this.cameras.main.fade(800, 50.2, 0, 50.2, false, function(camera, progress) {
                if (progress > 0.9) {
                    this.scene.stop("stage5")
                    this.scene.start("stage6")
                }
            })
        });

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