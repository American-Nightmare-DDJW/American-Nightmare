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

let player, guardia;
let keys;
let walls;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('fondo', '../assets/ciudad.png');
    this.load.image('policia', '../assets/policia.png');
    this.load.image('personaje', '../assets/emiliano.png');
    this.load.image('wall', '../assets/casa.png');
}

function create() {
    this.add.image(0, 0, 'fondo').setOrigin(0, 0);
    player = this.physics.add.image(400, 300, 'personaje').setScale(1);
    player.setCollideWorldBounds(true);

    keys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    // Crear grupo de paredes estáticas
    /*walls = this.physics.add.staticGroup();

    walls.create(400, 50, 'wall').setScale(2, 1).setScale(0.3).refreshBody(); // pared superior
    walls.create(400, 550, 'wall').setScale(2, 1).setScale(0.3).refreshBody(); // pared inferior
    walls.create(50, 300, 'wall').setScale(1, 6).setScale(0.3).refreshBody(); // izquierda
    walls.create(750, 300, 'wall').setScale(1, 6).setScale(0.3).refreshBody(); // derecha

    walls.create(300, 300, 'wall').setScale(1.5, 0.5).setScale(0.3).refreshBody();*/

    // Hacer que el jugador colisione con las paredes
    this.physics.add.collider(player, walls);

    //Pared central amb Ysort
    //let pared = walls.create(300, 300, 'wall').setScale(0.3).refreshBody();
    //pared.setDepth(pared.y);


    //Creacion guardias
    guardia = new Guardia(this, 100, 100, [{x: 100, y: 100}, {x: 200, y: 100}]);
    guardia = this.physics.add.image(400, 300, 'policia').setScale(1);
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
