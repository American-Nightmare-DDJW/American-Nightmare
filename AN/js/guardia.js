function preload() {
    this.load.image('policia', '../assets/policia/policia_static.png');
    this.load.image('wall', '../assets/casa.png');
}


class Guardia extends Phaser.GameObjects.Container {
    constructor(scene, x, y, patrullaPunts) {
        super(scene, x, y);
        this.scene = scene;
        this.patrullaPunts = patrullaPunts;
        this.puntActual = 0;

        this.sprite = scene.add.image(0, 0, 'policia').setScale(0.5);;
        this.add(this.sprite);
        
        //Cercle detecció
        this.radiDetecta = 50;
        this.deteccio = scene.add.circle(0, 0, this.radiDetecta, 0xffffff, 0.2);
        this.add(this.deteccio);
        
        // Con de visió
        this.angleVisio = 60;
        this.radiVisio = 150;
        this.linterna = scene.add.graphics();
        this.add(this.linterna);

        // Afegir a l’escena
        scene.add.existing(this);
        this.updateVisio();

        scene.physics.add.existing(this); // assigna un cos físic al Container
        this.body.setCollideWorldBounds(true);

    }

    updateVisio() {
        this.linterna.clear();
        this.linterna.fillStyle(0xffffff, 0.3); // canvia el color a blanc

        // Dibuixar el con en la direcció this.angleLinterna (0 = dreta, 180 = esquerra)
        const angleStart = Phaser.Math.DegToRad(this.angleLinterna - this.angleVisio / 2);
        const angleEnd = Phaser.Math.DegToRad(this.angleLinterna + this.angleVisio / 2);

        this.linterna.slice(0, 0, this.radiVisio, angleStart, angleEnd, false);
        this.linterna.fillPath();
    }
    patrullar() {
        const desti = this.patrullaPunts[this.puntActual];
        this.vel = new Phaser.Math.Vector2(desti.x - this.x, desti.y - this.y).normalize();
        this.scene.physics.moveTo(this, desti.x, desti.y, 100);

        // Actualitzar angle de la linterna segons la direcció
        if (this.vel.x > 0.1) {
            this.angleLinterna = 0; // dreta
        } else if (this.vel.x < -0.1) {
            this.angleLinterna = 180; // esquerra
        }

        if (Phaser.Math.Distance.Between(this.x, this.y, desti.x, desti.y) < 5) {
            this.puntActual = (this.puntActual + 1) % this.patrullaPunts.length;
        }
    }

    actualitzarJugador(player) {
        const dist = Phaser.Math.Distance.Between(this.x, this.y, player.x, player.y);
        if (dist < this.radiDetecta) {
            console.log("Game Over: massa a prop!");
            this.scene.scene.start('gameOver');
        }

        const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);
        const angleRelatiu = Phaser.Math.Angle.WrapDegrees(Phaser.Math.RadToDeg(angle) - this.angleLinterna);

        if (Math.abs(angleRelatiu) < this.angleVisio / 2 && dist < this.radiVisio) {
            console.log("Game Over: dins del con!");
            this.scene.scene.start('gameOver');
        }
    }

    preUpdate() {
        this.patrullar();
        this.updateVisio();
    }
}