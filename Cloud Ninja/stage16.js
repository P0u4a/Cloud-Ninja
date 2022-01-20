class stage16 extends Phaser.Scene {
    constructor() {
        super({key: "stage16"})
    }

    preload() {

        this.load.image("background", "assets/background.png");
        this.load.image("platform", "assets/cloud.png");
        this.load.image("platform2", "assets/thundercloud.png")
        this.load.image("lightning", "assets/lightning1.png");
        this.load.image("portal", "assets/portal.png");
        this.load.image("mc", "assets/mc_sprite.png");
        this.load.audio("jump", "assets/jump2.wav");
        this.load.audio("gameOver", "assets/death1.wav")
        this.load.audio("teleport", "assets/teleport1.wav")

    }

    create() {
        this.add.image(450,200, "background");

        platforms = this.physics.add.staticGroup();

        platforms.create(65, 380, "platform");

        player = this.physics.add.sprite(65, 350, "mc");

        this.physics.add.collider(player, platforms)

        obstacles = this.physics.add.group();
        gameOver = this.sound.add("gameOver");


        function lightningGen() {
            obstacles.create(200, 1, "lightning")
            obstacles.create(300, 1, "lightning") 
            obstacles.create(400, 1, "lightning") 
            obstacles.create(500, 1, "lightning") 
            obstacles.create(600, 1, "lightning") 
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

        movingplatform = this.physics.add.sprite(250, 300, "platform2");
        movingplatform.body.allowGravity = false
        movingplatform.body.immovable = false
        movingplatform.body.collideWorldBounds = false

        movingplatform2 = this.physics.add.sprite(350, 200, "platform2");
        movingplatform2.body.allowGravity = false
        movingplatform2.body.immovable = false
        movingplatform2.body.collideWorldBounds = false

        movingplatform3 = this.physics.add.sprite(450, 150, "platform2");
        movingplatform3.body.allowGravity = false
        movingplatform3.body.immovable = false
        movingplatform3.body.collideWorldBounds = false

        this.physics.add.collider(player, movingplatform)
        this.physics.add.collider(player, movingplatform2)
        this.physics.add.collider(player, movingplatform3)
        this.physics.add.collider(player, movingplatform4)


        checkpoint = this.physics.add.staticGroup() 
        checkpoint.create(700, 100, "portal");
        teleport = this.sound.add("teleport");

        this.physics.add.overlap(player, checkpoint, () => {
            teleport.play()
            this.physics.pause()
            this.cameras.main.fade(800, 50.2, 0, 50.2, false, function(camera, progress) {
                if (progress > 0.9) {
                    this.scene.stop("stage16")
                    this.scene.start("stage17")
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