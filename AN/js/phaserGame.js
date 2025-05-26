const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'gameContainer',
    backgroundColor: '#202020',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let keys;
let walls;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('cubo', '../assets/cubito.png');
    this.load.image('wall', '../assets/casa.png');
}

function create() {
    player = this.physics.add.image(400, 300, 'cubo').setScale(1);
    player.setCollideWorldBounds(true);

    keys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    // Crear grupo de paredes estáticas
    walls = this.physics.add.staticGroup();

    walls.create(400, 50, 'wall').setScale(2, 1).setScale(0.3).refreshBody(); // pared superior
    walls.create(400, 550, 'wall').setScale(2, 1).setScale(0.3).refreshBody(); // pared inferior
    walls.create(50, 300, 'wall').setScale(1, 6).setScale(0.3).refreshBody(); // izquierda
    walls.create(750, 300, 'wall').setScale(1, 6).setScale(0.3).refreshBody(); // derecha

    walls.create(300, 300, 'wall').setScale(1.5, 0.5).setScale(0.3).refreshBody();

    // Hacer que el jugador colisione con las paredes
    this.physics.add.collider(player, walls);

    //Pared central amb Ysort
    let pared = walls.create(300, 300, 'wall').setScale(0.3).refreshBody();
    pared.setDepth(pared.y);
}

function update() {
    player.setVelocity(0);

    if (keys.left.isDown) {
        player.setVelocityX(-200);
    } else if (keys.right.isDown) {
        player.setVelocityX(200);
    }

    if (keys.up.isDown) {
        player.setVelocityY(-200);
    } else if (keys.down.isDown) {
        player.setVelocityY(200);
    }
    player.setDepth(player.y);//Y sort
}
