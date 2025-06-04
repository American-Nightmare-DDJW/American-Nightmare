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

        // Imagen de Game Over 
        this.add.image(0, 0,'gameover_img').setOrigin(0.0).setDisplaySize(800, 600);

        // Botón de reintentar------------------------

        // Fondo animado del botón
        const btnWidth = 300;
        const btnHeight = 80;
        const btnRadius = 40;
        const btnX = centerX;
        const btnY = centerY + 150;

        // Dibuja el fondo del botón con bordes redondeados
        const botonFondo = this.add.graphics();
        botonFondo.fillStyle(0xff0000, 1);
        botonFondo.fillRoundedRect(btnX - btnWidth / 2, btnY - btnHeight / 2, btnWidth, btnHeight, btnRadius);

        const botonHitbox = this.add.rectangle(btnX, btnY, btnWidth, btnHeight)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        // Texto centrado sobre el botón
        const botonTexto = this.add.text(btnX, btnY, 'REINTENTAR', {
            fontSize: '32px',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            color: '#ffffff'
        }).setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        // Efecto sirena: alternar color del fondo
        this.time.addEvent({
            delay: 500,
            loop: true,
            callback: () => {
                const currentColor = botonFondo.defaultFillColor;
                const nextColor = currentColor === 0xff0000 ? 0x0044ff : 0xff0000;
                botonFondo.clear();
                botonFondo.fillStyle(nextColor, 1);
                botonFondo.fillRoundedRect(btnX - btnWidth / 2, btnY - btnHeight / 2, btnWidth, btnHeight, btnRadius);
                botonFondo.defaultFillColor = nextColor; // Guardamos el nuevo color
            }
        });
        botonFondo.defaultFillColor = 0xff0000; // Iniciamos el color
        const volverAJugar = () => this.scene.start('default');
        botonHitbox.on('pointerdown', volverAJugar);
        botonTexto.on('pointerdown', volverAJugar);
    }
}
