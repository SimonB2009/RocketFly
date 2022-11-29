let x;
let y;
let direction = 0; //from the rocket
let speedY = 0;
let speedX = 0;


var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('rocket','rocket.png');
    this.load.image('space','space.png');
}

function create ()
{
    this.add.image(500,400,"space");
    this.rocket = this.add.image(400,300,"rocket").setScale(0.4);
    this.cursors = this.input.keyboard.createCursorKeys();

}

function update ()
{
    this.rocket.y = this.rocket.y + speedY;    
    this.rocket.x = this.rocket.x + speedX; 
 

    if (this.cursors.left.isDown)
    {
        direction -= 1;
    }
    if (this.cursors.right.isDown)
    {
        direction += 1;
    }
    if (this.cursors.up.isDown)
    {
        speedY -= 0.05;
    }
    if (this.cursors.down.isDown)
    {
        speedY += 0.05;
    }
    if (direction < 0) direction = 360 + direction;
    if (direction > 360) direction = direction - 360;
    game.scene.scenes[0].rocket.angle = direction;
}