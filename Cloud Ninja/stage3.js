class stage3 extends Phaser.Scene {
    constructor() {
        super({key: "stage3"});
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
        platforms.create(63, 300, "platform"); //starting position
        platforms.create(200, 190, "platform"); 
        platforms.create(490, 190, "platform");
        platforms.create(700, 340, "platform");



        player = this.physics.add.sprite(60, 200, "mc");
        this.physics.add.collider(player, platforms);

        obstacles = this.physics.add.group();
        gameOver = this.sound.add("gameOver");

        function lightningGen() {
            obstacles.create(200, 1, "lightning");
            obstacles.create(350, 1, "lightning");
            obstacles.create(510, 1, "lightning");
            obstacles.create(650, 1, "lightning")
            obstacles.setVelocityY(200);
        }

        const lightningGenLoop = this.time.addEvent({
            delay: 550, 
            callback: lightningGen,
            callbackScope: this,
            loop: true, 
        });

        checkpoint = this.physics.add.staticGroup() 
        checkpoint.create(700, 300, "portal");
        teleport = this.sound.add("teleport");

        cursors = this.input.keyboard.createCursorKeys();

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
                    this.scene.stop("stage3")
                    this.scene.start("stage4")
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