class licenses extends Phaser.Scene {
    constructor() {
        super({key:"licenses"})
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("button", "assets/button.png")
        this.load.audio("click", "assets/click1.wav")
    }

    create() {
        this.add.image(450,200, "background");

        this.add.text(10, 40, "Credits & Licenses used:", { fontFamily: "Arial", fontSize: 20, color: "#000000" });
        this.add.text(10,80, "Created using the Phaser 3 framework by Richard Davey, licensed under the MIT license.", { fontFamily: "Arial", fontSize: 15, color: "#000000" });
        this.add.text(10, 100, "Phaser 3: https://github.com/photonstorm/phaser", { fontFamily: "Arial", fontSize: 15, color: "#000000" });
        this.add.text(10, 120, "Richard Davey's profile: https://github.com/photonstorm", { fontFamily: "Arial", fontSize: 15, color: "#000000" });
        this.add.text(10, 140, "License (MIT): https://opensource.org/licenses/MIT", { fontFamily: "Arial", fontSize: 15, color: "#000000" });
        this.add.text(10,280, "---------------------------------------------------------------------------------------", { fontFamily: "Arial", fontSize: 15, color: "#000000" });
        this.add.text(10, 310, "© 2020, PaulTheBuilder. All rights reserved.", { fontFamily: "Calibri", fontSize: 20, color: "#000000" })
    
        click = this.sound.add("click")
        backbutton = this.add.image(750, 50, "button").setInteractive();
        this.add.text(725, 40, "Return", { fontFamily: "Arial", fontSize: 16, color: "#000000" })
        backbutton.on("pointerdown", () => {
            click.play()
            this.scene.stop("licenses")
            this.scene.start("start")
        })

    }



    update() {

    }
}
