class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOver');
    }

    create() {

        //CAMBIAR A IMAGEN DE GAMEOVERR!!!!!
        this.add.text(400, 300, '¡OVER!', {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

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
