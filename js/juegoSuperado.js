class JuegoSuperado extends Phaser.Scene {
    constructor() {
        super('juegoSuperado');
    }
    preload() {
        this.load.image('victoria_img', '../assets/imagen_victoria.png'); 
    }
    create() {
       this.add.image(0, 0,'victoria_img').setOrigin(0.0).setDisplaySize(800, 600);       
    }
}

 

