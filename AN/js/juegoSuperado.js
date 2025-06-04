class JuegoSuperado extends Phaser.Scene {
    constructor() {
        super('juegoSuperado');
    }

    create() {

        //CAMBIAR A IMAGEN DE VICTORIA!!!!!
        this.add.text(400, 300, '¡Juego Superado!', {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);
    }
}
