class levelselect extends Phaser.Scene {
    constructor() {
        super({key: "levelselect"})
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("icon", "assets/icon.png");
        this.load.audio("click", "assets/click1.wav");

    }

    create() {
        click = this.sound.add("click")


        this.add.image(450,200, "background");
        level1 = this.add.image(65, 65, "icon").setInteractive();
        this.add.text(39,55, "LEVEL 1", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level1.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage1")
        });

        level2 = this.add.image(250, 65, "icon").setInteractive();
        this.add.text(224,55, "LEVEL 2", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level2.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage2")
        });

        level3 = this.add.image(440, 65, "icon").setInteractive();
        this.add.text(415,55, "LEVEL 3", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level3.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage3")
        });

        level4 = this.add.image(600, 65, "icon").setInteractive();
        this.add.text(573,55, "LEVEL 4", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level4.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage4")
        });

        level5 = this.add.image(750, 65, "icon").setInteractive();
        this.add.text(724,55, "LEVEL 5", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level5.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage5")
        });

        level6 = this.add.image(65, 150, "icon").setInteractive();
        this.add.text(39,140, "LEVEL 6", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level6.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage6")
        });

        level7 = this.add.image(250, 150, "icon").setInteractive();
        this.add.text(224,140, "LEVEL 7", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level7.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage7")
        });

        level8 = this.add.image(440, 150, "icon").setInteractive();
        this.add.text(415,140, "LEVEL 8", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level8.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage8")
        });

        level9 = this.add.image(600, 150, "icon").setInteractive();
        this.add.text(573,140, "LEVEL 9", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level9.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage9")
        });

        level10 = this.add.image(750, 150, "icon").setInteractive();
        this.add.text(722,140, "LEVEL 10", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level10.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage10")
        });

        level11 = this.add.image(65, 235, "icon").setInteractive();
        this.add.text(38,225, "LEVEL 11", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level11.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage11")
        });

        level12 = this.add.image(250, 235, "icon").setInteractive();
        this.add.text(222,225, "LEVEL 12", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level12.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage12")
        });

        level13 = this.add.image(440, 235, "icon").setInteractive();
        this.add.text(412,225, "LEVEL 13", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level13.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage13")
        });

        level14 = this.add.image(600, 235, "icon").setInteractive();
        this.add.text(571,225, "LEVEL 14", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level14.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage14")
        });

        level15 = this.add.image(750, 235, "icon").setInteractive();
        this.add.text(722,225, "LEVEL 15", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level15.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage15")
        });

        level16 = this.add.image(65, 325, "icon").setInteractive();
        this.add.text(37,315, "LEVEL 16", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level16.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage16")
        });

        level17 = this.add.image(250, 325, "icon").setInteractive();
        this.add.text(222,315, "LEVEL 17", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level17.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage17")
        });

        level18 = this.add.image(440, 325, "icon").setInteractive();
        this.add.text(412,315, "LEVEL 18", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level18.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage18")
        });

        level19 = this.add.image(600, 325, "icon").setInteractive();
        this.add.text(571,315, "LEVEL 19", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level19.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage19")
        });

        level20 = this.add.image(750, 325, "icon").setInteractive();
        this.add.text(722,315, "LEVEL 20", { fontFamily: "Arial", fontSize: 13, color: "#000000" })

        level20.on('pointerdown', () => {
            click.play()
            this.scene.stop("levelselect")
            this.scene.start("stage20")
        });

        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.stop("levelselect")
            this.scene.start("start")
        });


    }

    update() {

    }
}