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
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let guardia_1, guardia_2, guardia_3, guardia_4, guardia_5;
let keys;
let walls;
let casa, casa2;
let traficante;
let dineroRecogido = false;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('fondo', '../assets/fondo.png');
    this.load.image('policia', '../assets/policia/policia_static.png');
    this.load.image('personaje', '../assets/emiliano/emiliano_static.png');
    this.load.image('wall1', '../assets/ciudad_edificios/ed_edificios_inicio(1).png');
    this.load.image('wall', '../assets/casa.png');
    this.load.image('wall2', '../assets/ciudad_edificios/ed_edificos_arriba(5).png');
    this.load.image('wall3', '../assets/ciudad_edificios/ed_edificios_arriba(4).png');
    this.load.image('traf', '../assets/vendedor_identidades.png');
    this.load.image('dinero', '../assets/dinero.png');

}

function create() {
    this.add.image(0, 0, 'fondo').setOrigin(0, 0).setDisplaySize(800, 600);
    player = this.physics.add.image(100, 500, 'personaje').setScale(0.5);// SPAWN POINT--------------------------
    player.setCollideWorldBounds(true);
    player.setSize(20, 10);       // Tamaño de la caja de colisión (ancho, alto)
    player.setOffset(30, 120); 

    keys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D
    });

    
    // CASES 1a FILA
    casa = this.physics.add.image(394, 450, 'wall1').setScale(0.4);
    casa.setImmovable(true);
    casa.body.allowGravity = false;
    casa.setSize(1350, 50);
    casa.setOffset(0, 300);
    this.physics.add.collider(player, casa);

    //CASES FINAL
    casa2 = this.physics.add.image(400, 35, 'wall2').setScale(0.4)
    casa2.setImmovable(true);
    casa2.body.allowGravity = false;
    casa2.setSize(2000, 50);
    casa2.setOffset(40, 105);
    this.physics.add.collider(player, casa2);

    //CASES MIG
    casa2 = this.physics.add.image(410, 210, 'wall3').setScale(0.4)
    casa2.setImmovable(true);
    casa2.body.allowGravity = false;
    casa2.setSize(1300, 50);
    casa2.setOffset(900, 270);
    this.physics.add.collider(player, casa2);

    //TRAFICANTE
    traficante = casa2 = this.physics.add.image(750, 50, 'traf').setScale(0.5)
    traficante.setImmovable(true);
    traficante.body.allowGravity = false;
    traficante.setSize(60,90);
    traficante.setOffset(10, 50);


    //DINERO
    const item = this.physics.add.image(50, 310, 'dinero').setScale(0.02);
    item.setImmovable(true);
    item.body.allowGravity = false;
    
    //Creacion guardias

    guardia_1 = new Guardia(this, 422, 511, [{x: 422, y: 511}, {x: 709, y: 511}]);
    guardia_2 = new Guardia(this, 332, 357, [{x: 332, y: 357}, {x: 673, y: 357}]);
    guardia_3 = new Guardia(this, 518, 195, [{x: 216, y: 195}, {x: 518, y: 195}]);
    guardia_4 = new Guardia(this, 26, 112, [{x: 26, y: 112}, {x: 243, y: 112}]);
    //guardia_5 =

    
    // COLISIÓN CON EL OBJETO → RECOGER
    this.physics.add.overlap(player, item, () => {
        dineroRecogido = true;
        item.destroy(); // eliminar visualmente el objeto
        console.log('¡Has recogido el dinero!');
    });

    // COLISIÓN CON EL TRAFICANTE → COMPROBAR CONDICIÓN
    this.physics.add.overlap(player, traficante, () => {
        if (dineroRecogido) {
            console.log('¡Has ganado!');
            //this.scene.start('juegoSuperado'); // o window.location.href = "victoria.html";
        } else {
            console.log('Te falta la llave...');
        }
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

    // o para todos:
    this.children.each(obj => {
        if (!obj.getData('sorted') && obj.body) {
            setDepthByFeet(obj);
        }
    });

    guardia_1.actualitzarJugador(player);
    guardia_2.actualitzarJugador(player);
    guardia_3.actualitzarJugador(player);




    this.input.on('pointerdown', function (pointer) {
    const marker = this.add.circle(pointer.worldX, pointer.worldY, 5, 0xffff00);
    console.log(`🧭 Marker a: x=${Math.floor(pointer.worldX)}, y=${Math.floor(pointer.worldY)}`);
    }, this);
    
}

//FUNCION PARA CALCULAR EL DEPTH DESDE LOS PIES DE LOS
function setDepthByFeet(obj) {
    if (!obj.body) return;
    const feetY = obj.body.y + obj.body.height;
    obj.setDepth(feetY);
}
