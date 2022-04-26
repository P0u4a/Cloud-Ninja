class credits extends Phaser.Scene {
    constructor() {
        super({key: "credits"})
    }

    preload() {
        this.load.image("background", "assets/background.png");
    }

    create() {
        this.add.image(450,200, "background");

        this.add.text(100,100, "Thank you for playing Cloud Ninja", { fontFamily: "Arial", fontSize: 40, color: "#000066" })
        this.add.text(290,300, "Created by PaulTheBuilder", { fontFamily: "Arial", fontSize: 20, color: "#000066" })

        this.cameras.main.fade(12000, 0, 0, 0, false, function(camera, progress) {
            if (progress > 0.9) {
                this.scene.stop("credits")
                this.scene.start("start")
            }
        })
    }

    update() {

    }
}
