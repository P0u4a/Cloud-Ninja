class start extends Phaser.Scene {
    constructor() {
        super({key: "start"})
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("playbutton", "assets/play.png")
        this.load.image("platform", "assets/cloud.png");
        this.load.image("mc", "assets/mc_sprite.png",);
        this.load.image("portal", "assets/portal.png");
        this.load.image("credits", "assets/credits.png");
        this.load.audio("click", "assets/click1.wav")

    }

    create() {
        this.add.image(450,200, "background");
        this.add.text(267,70, "CLOUD NINJA", { fontFamily: "Arial", fontSize: 40, color: "#000066" })
        platforms = this.physics.add.staticGroup();
        platforms.create(63, 250, "platform"); 
        platforms.create(140, 100, "platform"); 
        platforms.create(450, 250, "platform"); 
        platforms.create(730,300, "platform");
        platforms.create(650,60, "platform"); 

        player = this.physics.add.sprite(60, 220, "mc");
        this.physics.add.collider(player, platforms);

        checkpoint = this.physics.add.staticGroup()
        checkpoint.create(730, 260, "portal");

        playbutton = this.add.image(400, 230, "playbutton").setInteractive();

        licensesCredits = this.add.image(400, 350, "credits").setInteractive();

        this.add.text(362,215, "PLAY", { fontFamily: "Arial", fontSize: 30, color: "#000000" });
        this.add.text(345,335, "CREDITS", { fontFamily: "Arial", fontSize: 25, color: "#000000" });

        click = this.sound.add("click")

        playbutton.on("pointerdown", () => {
            click.play()
            this.scene.stop("start")
            this.scene.start("levelselect")
        });

        licensesCredits.on("pointerdown", () => {
            click.play()
            this.scene.stop("start")
            this.scene.start("licenses")
        })

    }

    update() {

    }
}