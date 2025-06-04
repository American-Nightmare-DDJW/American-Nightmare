class PausaMenu extends Phaser.Scene {
    constructor() {
        super('pausaMenu');
    }
    
    create() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        // Fondo oscuro translúcido
        this.add.rectangle(centerX, centerY, 800, 600, 0x000000, 0.6);

        const botonContinuar = this.add.rectangle(centerX, centerY - 60, 300, 80, 0xff0000)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        const textoContinuar = this.add.text(centerX, centerY - 60, 'CONTINUAR', {
            fontSize: '28px',
            fontStyle: 'bold',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: botonContinuar,
            duration: 600,
            repeat: -1,
            yoyo: true,
            ease: 'Linear',
            props: {
                fillColor: {
                    value: [0xff0000, 0x0044ff]
                }
            }
        });
        
        botonContinuar.on('pointerdown', () => {
            this.scene.stop();            
            this.scene.resume('default'); 
        });

        
        const botonMenu = this.add.rectangle(centerX, centerY + 60, 300, 80, 0xff0000)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        const textoMenu = this.add.text(centerX, centerY + 60, 'MENÚ PRINCIPAL', {
            fontSize: '24px',
            fontStyle: 'bold',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: botonMenu,
            duration: 600,
            repeat: -1,
            yoyo: true,
            ease: 'Linear',
            props: {
                fillColor: {
                    value: [0xff0000, 0x0044ff]
                }
            }
        });

        botonMenu.on('pointerdown', () => {
            this.scene.stop('default');
            window.location.assign('../index.html'); // Cambia al menú
        });
    }
}