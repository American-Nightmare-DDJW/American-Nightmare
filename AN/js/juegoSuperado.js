class JuegoSuperado extends Phaser.Scene {
    constructor() {
        super('juegoSuperado');
    }
    preload() {
        this.load.image('victoria_img', '../assets/imagen_victoria.png'); 
    }
    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

       this.add.image(centerX, centerY, 'victoria_img')
    .setOrigin(0.2)
    .setScale(0.2);

       
    }
}

 

