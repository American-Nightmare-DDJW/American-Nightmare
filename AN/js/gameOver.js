class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOver');
    }
     preload() {
        this.load.image('gameover_img', '../assets/imagen_derrota.png'); 
    }

    create() {

        //CAMBIAR A IMAGEN DE GAMEOVERR!!!!!
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        // Imagen de Game Over centrada
        this.add.image(centerX, centerY, 'gameover_img').setOrigin(0.5);

     

        // Botón de reintentar
        const boton = this.add.text(width / 2, height / 2 + 50, 'Reintentar', {
            fontSize: '32px',
            backgroundColor: '#ffffff',
            color: '#000',
            padding: { x: 10, y: 5 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
            this.scene.start('main'); // Vuelve a la escena principal
        });
    }
}
