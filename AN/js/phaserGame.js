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

const game = new Phaser.Game(config);

function preload() {
    this.load.image('cubo', './assets/cubito.png');
}

function create() {
    player = this.physics.add.image(400, 300, 'cubo');
    player.setCollideWorldBounds(true);

    keys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });
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
}
